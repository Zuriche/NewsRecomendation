from cloudAMQP_client import CloudAMQPClient

TEST_CLOUDAMQP_URL = "amqp://yjmwxagj:nlItGxXB9OOJX_14ePZ66TbhumRBsMai@beaver.rmq.cloudamqp.com/yjmwxagj"
TEST_QUEUE_NAME = "test"

def test_basic():
    client = CloudAMQPClient(TEST_CLOUDAMQP_URL, TEST_QUEUE_NAME)

    sentMsg = {'test':'test'}
    client.sendMessage(sentMsg)
    receivedMsg = client.getMessage()
    assert sentMsg == receivedMsg
    print('test_basic passed.')


if __name__ == "__main__":
    test_basic()
