import json
from datetime import datetime
import os


def read_data():
    start = "const searchDocuments ="
    with open("./searchDocuments.js") as f:
        data = f.read()[len(start) :]
        data = json.loads(data)
    return data


def short_date(created_at):
    date = datetime.strptime(created_at, "%a %b %d %H:%M:%S %z %Y")
    if date.year == datetime.now().year:
        return date.strftime("%b %d")
    return date.strftime("%b %d, %Y")


def url(item):
    return "./_TanHo/status/" + item["id_str"]

def get_page(item):
    date = short_date(item["created_at"])
    return f"""
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>tantastic tweets</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../../nitter.css">
  <link rel="stylesheet" href="../../../twitter.css">
  <link rel="stylesheet" href="../../../fonts/css/fontello.css">
  <link rel="stylesheet" href="../../../styles.css">
</head>
<body>
  <div class="wrapper" id="app">
    <h1><a href="../../..">tantastic tweets</a></h1>

    <div class="timeline">
      <div class="timeline-item">
        <a class="tweet-link" href="{url(item)}"></a>
        <div class="tweet-body">
          <div><div class="tweet-header">
              <a class="tweet-avatar" href="/"><img class="avatar round" src="../../../profile.jpg" alt=""></a>
              <div class="tweet-name-row">
                <div class="fullname-and-username">
                  <a class="fullname" href="/" title="Tan">Tan</a>
                  <a class="username" href="/" title="@_TanHo">@_TanHo</a>
                </div>
                <span class="tweet-date"><a href="{url(item)}" title="{date}">{date}</a></span>
              </div>
            </div></div>
            <div class="tweet-content media-body" dir="auto"> {item['full_text']} </div>
            <div class="tweet-stats">
              <span class="tweet-stat"><div class="icon-container"><span class="icon-retweet" title=""></span> {item['retweet_count']}</div></span>
              <span class="tweet-stat"><div class="icon-container"><span class="icon-heart" title=""></span> {item['favorite_count']}</div></span>
            </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
""".replace(
        "../../tweets_media", "../../../tweets_media"
    )


def main():
    data = read_data()
    for item in data:
        os.makedirs(f"_TanHo/status/{item['id_str']}", exist_ok=True)
        with open(f"./_TanHo/status/{item['id_str']}/index.html", "w") as f:
            f.write(get_page(item))


if __name__ == "__main__":
    main()