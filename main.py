from tweepy import OAuthHandler, API

# Authenticate:
CONSUMER_KEY = '<CONSUMER_KEY>'
CONSUMER_SECRET = '<CONSUMER_SECRET>'
ACCESS_TOKEN = '<ACCESS_TOKEN>'
ACCESS_TOKEN_SECRET = '<ACCESS_TOKEN_SECRET>'


# Create API object to connect to Twitter and make API Calls:

# Get Tweets for a specific user:


class TwitterClient:
    def __init__(self) -> None:
        self.api = API(TwitterClient.authenticate())

    @staticmethod
    def authenticate():
        auth = OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
        auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
        return auth

    def get_user_tweets(self):
        username = input("User: > ")
        try:
            no_of_tweets = int(input('Number of Tweets: (Default: 20)> '))
        except:
            no_of_tweets = 20
        try:
            include_replies = bool(
                input('Include Replies? (Y/N) (Default: N)> '))
        except:
            include_replies = False

        tweets = self.api.user_timeline(
            screen_name=username,
            count=no_of_tweets,
            include_rts=False,
            include_replies=include_replies,
            tweet_mode='extended'
        )
        return tweets

    def get_tweets_by_hashtag(self):
        hashtag = input("Hashtag: > ")
        try:
            no_of_tweets = int(input('Number of Tweets: (Default: 20)> '))
        except:
            no_of_tweets = 20
        try:
            include_replies = bool(
                input('Include Replies? (Y/N) (Default: N)> '))
        except:
            include_replies = False

        tweets = self.api.search(
            q=hashtag,
            count=no_of_tweets,
            include_rts=False,
            include_replies=include_replies,
            tweet_mode='extended'
        )
        return tweets

    @staticmethod
    def get_tweets_text(tweets):
        tweets_text = []
        for tweets in tweets:
            tweets_text.append(tweets.full_text)
        return tweets_text


def get_source():
    print("How do you want to fetch tweets?")
    print(" 1. > User")
    print(" 2. > Hashtag")
    try:
        choice = int(input("Enter your choice: > "))
    except:
        print("Invalid Choice")
        get_source()
    return choice


def print_tweets(tweets):
    for tweet in tweets:
        print(tweet.full_text)


def print_tweets_text(tweets):
    for tweet in tweets:
        print(tweet)


def print_tweets_text_pretty(tweets):
    print("= TWEETS ==========================================")
    for tweet, index in zip(tweets, range(len(tweets))):
        print(f"""
- Tweet {index} -----------------------------------
{tweet}
---------------------------------------------------
""")
    print("===================================================")


choice = get_source()

client = TwitterClient()

tweets = client.get_user_tweets() if choice == 1 else client.get_tweets_by_hashtag()
tweets_text = TwitterClient.get_tweets_text(tweets)

print_tweets_text_pretty(tweets_text)
