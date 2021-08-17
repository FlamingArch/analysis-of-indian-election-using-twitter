import streamlit as st

st.title("Analysis of Indian Election")

st.write("""
Mini Project: Analysis of Indian Election using Twitter

### Created By
**Harsh Chaturvedi**  
**Section:** ML  
**Roll No:** 2014669  
""")

st.write("# Get Tweets")
st.write("Enter Twitter `@Handle` or `#Hashtag`")
st.text_input("#hashtag or @handle")
n_tweets = st.slider(
    "Enter Number of Tweets to collect",
    min_value=10, max_value=100
)
