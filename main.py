import streamlit as st
import tweepy as tp

from controller import TweetsController
from model import TweetModel

controller = TweetsController()

st.sidebar.title("Analysis of Indian Election")
# st.sidebar.write("""
# ######**MINI PROJECT · BY:** **Harsh Chaturvedi** **·** **Section:** ML  **·**  **Roll No:** 2014669 
# """)

st.sidebar.write("""
## Get Tweets
Enter Twitter `@Handle` or `#Hashtag`
""")

username_handle = st.sidebar.text_input("")
n_tweets = st.sidebar.slider(
    "Number of Tweets",
    min_value=10, max_value=1000, value=100
)
st.sidebar.button("Collect Tweets")


st.write("""# Collected Tweets""")
# if len(controller.tweets) == 0:
if len(controller.tweets) > 0:
    st.write(f"""Use Sidebar to Fetch Tweets""")
else:
    st.write("Sup")