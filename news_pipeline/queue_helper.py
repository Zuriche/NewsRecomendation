import os
import sys

# import common package in parent directory
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))

from cloudAMQP_client import CloudAMQPClient

DEDUPE_NEWS_TASK_QUEUE_URL = 'amqp://vncziqbi:7XOiPBEJqZHs8Q2IaZOLu8372CrgoJKL@caterpillar.rmq.cloudamqp.com/vncziqbi'
DEDUPE_NEWS_TASK_QUEUE_NAME = 'news-recommendation-dedupe-news-task-queue'
SCRAPE_NEWS_TASK_QUEUE_URL = 'amqp://kgpouqkl:S85rQuySkJXBJ_10eJvrfB8_MvQ-TZWa@otter.rmq.cloudamqp.com/kgpouqkl'
SCRAPE_NEWS_TASK_QUEUE_NAME = 'news-recommendation-scrape-news-task-queue'

def clearQueue(queue_url, queue_name):
    scrape_news_queue_client = CloudAMQPClient(queue_url, queue_name)

    num_of_messages = 0

    while True:
        if scrape_news_queue_client is not None:
            msg = scrape_news_queue_client.getMessage()
            if msg is None:
                print("Cleared %d messages." % num_of_messages)
                return
            num_of_messages += 1


if __name__ == "__main__":
    clearQueue(SCRAPE_NEWS_TASK_QUEUE_URL, SCRAPE_NEWS_TASK_QUEUE_NAME)
    clearQueue(DEDUPE_NEWS_TASK_QUEUE_URL, DEDUPE_NEWS_TASK_QUEUE_NAME)
