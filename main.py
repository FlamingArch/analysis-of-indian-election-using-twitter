import streamlit as st

st.sidebar.title("Analysis of Indian Election using Twitter")
st.sidebar.write("""
**MINI PROJECT · CREATED BY:** **Harsh Chaturvedi** **·** **Section:** ML  **·**  **Roll No:** 2014669 
""")

st.sidebar.write("""
# Get Tweets
Enter Twitter `@Handle` or `#Hashtag`
""")

username_handle = st.sidebar.text_input("")
n_tweets = st.sidebar.slider(
    "Number of Tweets",
    min_value=10, max_value=1000, value=100
)
st.sidebar.button("Collect Tweets")


st.write("""# Collected Tweets""")

st.write(f"""Enter handle/hashtag in above field""")
