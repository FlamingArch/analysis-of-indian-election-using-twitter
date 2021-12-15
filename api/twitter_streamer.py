from tweepy import API
from tweepy import Cursor

from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

import secret


class TwitterClient():
    def __init__(self) -> None:
        self.auth = TwitterAuthenticator().authenticate_twitter_app()
        self.twitter_client = API(self.auth)

    def get_user_timeline_tweets(self, num_tweets):
        tweets = []
        for tweet in Cursor(self.twitter_client.user_timeline).items(num_tweets):
            tweets.append(tweet)
        return tweets


class TwitterAuthenticator:
    def authenticate_twitter_app(self) -> None:
        self.auth = OAuthHandler(
            secret.CONSUMER_KEY, secret.CONSUMER_SECRET
        )
        self.auth.set_access_token(
            secret.ACCESS_TOKEN, secret.ACCESS_TOKEN_SECRET
        )


class TwitterStreamer():
    def stream_tweets(self, fetched_tweets_filename, hash_tag_list):
        listener = StdOutListener(fetched_tweets_filename)

        stream = Stream(auth, listener)
        stream.filter(track=hash_tag_list)


class StdOutListener(StreamListener):

    def on_data(self, data):
        try:
            print(data)
            with open('tweets.json', 'a') as tf:
                tf.write(data)
            return True
        except BaseException as e:
            print(f"Error on_data: {e}")

    def on_error(self, status):
        print(status)


if __name__ == '__main__':
    hash_tag_list = [
        "python", "javascript",
        "swift", "ruby", "c#", "c++", "c", "java"
    ]
    fetched_tweets_filename = "tweets.json"

    twitter_client = TwitterClient()
    print(twitter_client.get_user_timeline_tweets(5))

    # twitter_streamer = TwitterStreamer()
    # twitter_streamer.stream_tweets(fetched_tweets_filename, hash_tag_list)
