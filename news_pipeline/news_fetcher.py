import os
import sys

from newspaper import Article


# import common package in parent directory
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))
sys.path.append(os.path.join(os.path.dirname(__file__), 'scrapers'))

import cnn_news_scraper
from cloudAMQP_client import CloudAMQPClient

DEDUPE_NEWS_TASK_QUEUE_URL = 'amqp://vncziqbi:7XOiPBEJqZHs8Q2IaZOLu8372CrgoJKL@caterpillar.rmq.cloudamqp.com/vncziqbi'
DEDUPE_NEWS_TASK_QUEUE_NAME = 'news-recommendation-dedupe-news-task-queue'
SCRAPE_NEWS_TASK_QUEUE_URL = 'amqp://kgpouqkl:S85rQuySkJXBJ_10eJvrfB8_MvQ-TZWa@otter.rmq.cloudamqp.com/kgpouqkl'
SCRAPE_NEWS_TASK_QUEUE_NAME = 'news-recommendation-scrape-news-task-queue'

SLEEP_TIME_IN_SECONDS = 10

dedupe_news_queue_client = CloudAMQPClient(DEDUPE_NEWS_TASK_QUEUE_URL, DEDUPE_NEWS_TASK_QUEUE_NAME)
scrape_news_queue_client = CloudAMQPClient(SCRAPE_NEWS_TASK_QUEUE_URL, SCRAPE_NEWS_TASK_QUEUE_NAME)


def handle_message(msg):
    if msg is None or not isinstance(msg, dict):
        print('message is broken')
        return

    task = msg
    text = None
    # We support CNN only today.
    # if task['source'] == 'cnn':
    #     print('scraping CNN news')
    #     text = cnn_news_scraper.extract_news(task['url'])
    # else:
    #     print('News source [%s] is not support.' % task['source'])
    #
    # task['text'] = text
    # dedupe_news_queue_client.sendMessage(task)

    article = Article(task['url'])
    article.download()
    article.parse()

    task['text'] = article.text
    dedupe_news_queue_client.sendMessage(task)

def run():
    while True:
        if scrape_news_queue_client is not None:
            msg = scrape_news_queue_client.getMessage()
            if msg is not None:
                # Parse and process the task
                try:
                    handle_message(msg)
                except Exception as e:
                    print(e)
                    pass
            scrape_news_queue_client.sleep(SLEEP_TIME_IN_SECONDS)

if __name__ == "__main__":
    run()
