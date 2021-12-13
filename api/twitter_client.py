# Secrets
from tweepy import API, OAuthHandler
from secrets import CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET


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
                "username": tweet.user.screen_name
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
