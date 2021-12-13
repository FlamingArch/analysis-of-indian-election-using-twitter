print("CREATING SECRET.PY")
print("Please have your twitter API keys and Access Tokens ready.\nIn case you don't have them, please go to https://apps.twitter.com/ and create an app. Then go to the Keys and Access Tokens tab and get your keys and tokens.")

with open("secret.py", "w") as f:
    f.write(f'CONSUMER_KEY = "{input("Consumer/API Key: ")}"\n')
    f.write(f'CONSUMER_SECRET = "{input("Consumer/API Secret Key: ")}"\n')
    f.write(f'ACCESS_TOKEN = "{input("Access Token: ")}"\n')
    f.write(f'ACCESS_TOKEN_SECRET = "{input("Access Token Secret: ")}"\n')

print("SECRET.PY CREATED")
print("Cpt. Obvious Says:\n    Don't share the secret.py file (and your API keys) with anyone.\n    Not even your parents.\n    Specially not the hot girl you've been looking at during work.    \nPS: She probably already has a boyfriend...")
