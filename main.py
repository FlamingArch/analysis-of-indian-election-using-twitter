# Secrets
from tweepy import API, OAuthHandler

API_KEY = "Nkggd5HoSffo9kxzshxDKZOuG"
API_KEY_SECRET = "3pP39MFAtcfgmlhqTBA2aqArO209vrsynnym1jfwoSPw9yXXBF"
BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAAD0UQEAAAAAaIO%2BVQ5kYomb21WxIZRnXkpsuKY%3De89P9wFgEJ3O2iwsPZSqawrfbaO02Xf43W4cczafkFgdTdap56"
ACCESS_TOKEN = "1445847461923147778-yvd4HfbfVdXPFcVvtHtF8jlCWSNDyl"
ACCESS_TOKEN_SECRET = "TTtOjDcnAaBLFsUsu1Ij88IzSlw01YRGbzArOBcHmAqOn"
CONSUMER_KEY = API_KEY
CONSUMER_SECRET = API_KEY_SECRET


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
        for tweet in self.api.search(q=hashtag, count=count, tweet_mode="extended"):
            tweets.append(tweet.full_text)
        return tweets

    def get_user_tweets(self, username, count):
        tweets = []
        for tweet in self.api.user_timeline(screen_name=username, count=count, tweet_mode="extended"):
            tweets.append(tweet.full_text)
        return tweets


def main():
    client = TwitterClient()

    topics_parties = ["bjp", "congress", "ncp", "shivsena", "samajwadi", "bsp"]
    topics_leaders = ["narendramodi", "rahulgandhi",
                      "akhileshyadav", "arvindkejriwal", "soniagandhi"]
    topics_activities = ["kisanandolan", "caa", "farmlaw"]

    print("Fetching tweets for Parties:")
    for topic in topics_parties:
        print("\n:: " + topic)
        tweets = client.get_hashtag_tweets(topic, 100)
        for tweet in tweets:
            print("   > " + tweet)

    print("Fetching tweets for Leaders:")
    for topic in topics_leaders:
        print("\n:: " + topic)
        tweets = client.get_hashtag_tweets(topic, 100)
        for tweet in tweets:
            print("   > " + tweet)

    print("Fetching tweets for Activities:")
    for topic in topics_activities:
        print("\n:: " + topic)
        tweets = client.get_hashtag_tweets(topic, 100)
        for tweet in tweets:
            print("   > " + tweet)


if __name__ == "__main__":
    main()
