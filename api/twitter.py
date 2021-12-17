from tweepy import API, OAuthHandler
from tweepy import Cursor
from datetime import date
from datetime import timedelta
# Secrets
from secret import CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET


class TwitterClient:
    def __init__(self):
        self.auth = self.authenticate()
        self.api = API(self.auth)

    def authenticate(self):
        auth = OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
        auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
        return auth

    def get_hashtag_tweets(self, hashtag, count):
        tweets = []
        for tweet in self.api.search_tweets(q=hashtag, count=count, tweet_mode="extended"):
            tweets.append({
                "text": tweet.full_text,
                "username": tweet.user.screen_name,
                "likes": tweet.favorite_count,
                "retweets": tweet.retweet_count
            })
        return tweets

    def get_user_tweets(self, username, count):
        tweets = []
        for tweet in self.api.user_timeline(screen_name=username, count=count, tweet_mode="extended"):
            tweets.append({
                "text": tweet.full_text,
                "username": tweet.user.screen_name
            })
        return tweets

    def get_hashtag_tweets_24hr(self, hashtag):
        yesterday = date.today() - timedelta(days=1)
        return len(Cursor(self.api.search, q=hashtag + str(yesterday) + " until:" + str(date.today()), tweet_mode='extended', lang='fa').items())


class TwitterTopics:
    def __init__(self):
        self.client = TwitterClient()

        self.topics_parties = ["bjp", "congress",
                               "ncp", "shivsena", "samajwadi", "bsp"]
        self.topics_leaders = ["narendramodi", "rahulgandhi",
                               "akhileshyadav", "arvindkejriwal", "soniagandhi"]
        self.topics_activities = ["kisanandolan",
                                  "caa", "farmlaw", "covid", "vaccine"]

    def fetch_parties(self, n=20):
        print("Fetching tweets for Parties:")
        tweets = {}
        for topic in self.topics_parties:
            print(":: " + topic)
            topic_tweets = self.client.get_hashtag_tweets(topic, n)
            tweets[topic] = (topic_tweets)
        return tweets

    def fetch_leaders(self, n=20):
        print("Fetching tweets for Leaders:")
        tweets = []
        for topic in self.topics_leaders:
            print(":: " + topic)
            topic_tweets = self.client.get_hashtag_tweets(topic, n)
            tweets[topic] = (topic_tweets)
        return tweets

    def fetch_controversies(self, n=20):
        print("Fetching tweets for Activities:")
        tweets = []
        for topic in self.topics_activities:
            print(":: " + topic)
            topic_tweets = self.client.get_hashtag_tweets(topic, n)
            tweets[topic] = (topic_tweets)
        return tweets
