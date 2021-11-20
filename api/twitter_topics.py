from twitter_client import TwitterClient


class TwitterTopics:
    def __init__(self):
        self.client = TwitterClient()

        self.topics_parties = ["bjp", "congress",
                               "ncp", "shivsena", "samajwadi", "bsp"]
        self.topics_leaders = ["narendramodi", "rahulgandhi",
                               "akhileshyadav", "arvindkejriwal", "soniagandhi"]
        self.topics_activities = ["kisanandolan", "caa", "farmlaw"]

    def fetch_parties(self):
        print("Fetching tweets for Parties:")
        tweets = []
        for topic in self.topics_parties:
            print("\n:: " + topic)
            tweets = self.client.get_hashtag_tweets(topic, 100)
            for tweet in tweets:
                tweets.append(tweet)
        return tweets

    def fetch_leaders(self):
        print("Fetching tweets for Leaders:")
        tweets = []
        for topic in self.topics_leaders:
            print("\n:: " + topic)
            tweets = self.client.get_hashtag_tweets(topic, 100)
            for tweet in tweets:
                tweets.append(tweet)
        return tweets

    def fetch_activities(self):
        print("Fetching tweets for Activities:")
        tweets = []
        for topic in self.topics_activities:
            print("\n:: " + topic)
            tweets = self.client.get_hashtag_tweets(topic, 100)
            for tweet in tweets:
                tweets.append(tweet)
        return tweets
