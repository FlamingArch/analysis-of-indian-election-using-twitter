from tweepy import OAuthHandler, API
import streamlit as st

# Authenticate:
CONSUMER_KEY = '<CONSUMER_KEY>'
CONSUMER_SECRET = '<CONSUMER_SECRET>'
ACCESS_TOKEN = '<ACCESS_TOKEN>'
ACCESS_TOKEN_SECRET = '<ACCESS_TOKEN_SECRET>'


cli = False


class TwitterClient:
    def __init__(self) -> None:
        self.api = API(TwitterClient.authenticate())

    @staticmethod
    def authenticate():
        auth = OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
        auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
        return auth

    def get_user_tweets(self, username, no_of_tweets, include_replies):
        tweets = self.api.user_timeline(
            screen_name=username,
            count=no_of_tweets,
            include_rts=False,
            include_replies=include_replies,
            tweet_mode='extended'
        )
        return tweets

    def get_tweets_by_hashtag(self, hashtag, no_of_tweets, include_replies):
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


def get_cli_input():
    choice = get_source()
    if choice == 1:
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
        return choice, username, no_of_tweets, include_replies
    else:
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
        return choice, hashtag, no_of_tweets, include_replies


def get_tweets(choice, input, no_of_tweets, include_replies):
    client = TwitterClient()
    if choice == 1:
        tweets = client.get_user_tweets(input, no_of_tweets, include_replies)
    else:
        tweets = client.get_tweets_by_hashtag(
            input, no_of_tweets, include_replies)
    return tweets

def display_tweets_st(choice, input, no_of_tweets, include_replies):
    tweets = get_tweets(choice, input, no_of_tweets, include_replies)
    for tweet in tweets:
        c = st.container()
        c.write(tweet.full_text)

if cli:
    choice, input, no_of_tweets, include_replies = get_cli_input()
    tweets_text = get_tweets(choice, input, no_of_tweets, include_replies)
    print_tweets_text_pretty(tweets_text)
else:
    choice_str = st.sidebar.radio(
        "How do you want to fetch tweets?", ["User", "Hashtag"])
    choice = 1 if choice_str == "User" else 2
    input = st.sidebar.text_input(choice_str)
    no_of_tweets = st.sidebar.slider(
        "No. of Tweets:", min_value=1, max_value=100, value=20)
    include_replies = st.sidebar.checkbox("Include Replies?")
    tweets = st.sidebar.button("Fetch Tweets", on_click=display_tweets_st, args=(
        choice, input, no_of_tweets, include_replies))