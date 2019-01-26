import requests
from json import loads

NEWS_API_ENDPOINT = 'https://newsapi.org/v1/'
NEWS_API_KEY1 = '58ec8830d33e4f5c9c7d9c038eabe647'
NEWS_API_KEY2 = 'fb634df46c6941c7b53826768d98b927'

ARTICLES_API = 'articles'


CNN = 'cnn'
DEFAULT_SOURCES = [CNN]
SORT_BY_TOP = 'top'

def _buildUrl(endPoint=NEWS_API_ENDPOINT, apiName=ARTICLES_API):
    return endPoint + apiName

def getNewsFromSources(sources=DEFAULT_SOURCES, sortBy=SORT_BY_TOP):
    articles = []

    for source in sources:
        payload1 = {'apiKey': NEWS_API_KEY1,
                    'source': source,
                    'sortBy': sortBy}
        payload2 = {'apiKey': NEWS_API_KEY2,
                    'source': source,
                    'sortBy': sortBy}
        response = requests.get(_buildUrl(), params=payload1)
        if(response.status_code == 429):
            response = requests.get(_buildUrl(), params=payload2)

        res_json = loads(response.content.decode('utf-8'))
        if(res_json is not None and
            res_json['status'] == 'ok' and
            res_json['source'] is not None):
            # match the source to each news
            for news in res_json['articles']:
                news['source'] = res_json['source']

            articles.extend(res_json['articles'])
    return articles

if __name__ == "__main__":
    getNewsFromSources()
