# Gnews_Interactive_API

<h3>
  An interactive API that takes queries of different categories and gets results from <a href="https://gnews.io/">GNews API</a> and returns them right on.
  Have also included caching to optimise the API calls and performance.
</h3>
<h4>Installation:</h4>
<i>You can either clone/fork or download-extract this project-zip and run following commands:</i>

<li><code>npm install --legacy-peer-deps --save</code> or simply <code>npm i</code></li>
<li><code>npm i express cors axios nodemon apicache</code></li>
<li><code>nodemon index.js</code></li>
<ul>As simple as that!<ul/><br>
<h4>Endpoints:</h4>
<li>
  Search by <code>keyword</code>: <a href="https://gnews-customapi-pranjal.herokuapp.com/search/">/search/"yourKeyWord"</a> 
  <ul>Just add the <code>keyword</code> that you'd like to search for at the end of this url [https://gnews-customapi-pranjal.herokuapp.com/search/]</ul>
</li>
<li>
  Search by <code>keyword</code> and add <code>max</code>imum limit to search results: <a href="https://gnews-customapi-pranjal.herokuapp.com/search/">/search/"yourKeyWord"/"max"</a> 
  <ul>Just add the key word that you'd like to search for at the end of this url followed by <code>/number</code> where number is the maximum number of results you want the API to return [https://gnews-customapi-pranjal.herokuapp.com/search/]</ul>
</li>
<li>
  Search by <code>title</code>: <a href="https://gnews-customapi-pranjal.herokuapp.com/title/">/title/"yourKeyWord"</a> 
  <ul>Just add the <code>keyword</code> that you'd like to search for at the end of this url to get the results under <code>title</code> category [https://gnews-customapi-pranjal.herokuapp.com/title/]</ul>
</li>
<li>
  Search by <code>description</code>: <a href="https://gnews-customapi-pranjal.herokuapp.com/description/">/description/"yourKeyWord"</a> 
  <ul>Just add the <code>keyword</code> that you'd like to search for at the end of this url to get the results under <code>description</code> category [https://gnews-customapi-pranjal.herokuapp.com/description/]</ul>
</li>

