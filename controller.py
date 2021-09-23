class TweetsController:
    url = "https://twitter.com/api/"
    def init(self):
        self.tweets = []

    def add(self, tweet):
        self.tweets.append(tweet)

    def fetchOverNetwork(id, apiKey, completion):
        tweet = TweetsController.fetchJSON(TweetsController.url + "&api=" + apiKey + "&id=" + id)
        completion(tweet)
    
    def fetchJSON(url):
        raise NotImplemented
