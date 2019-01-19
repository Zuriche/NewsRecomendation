from cloudAMQP_client import CloudAMQPClient

TEST_CLOUDAMQP_URL = "amqp://kgpouqkl:S85rQuySkJXBJ_10eJvrfB8_MvQ-TZWa@otter.rmq.cloudamqp.com/kgpouqkl"
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
