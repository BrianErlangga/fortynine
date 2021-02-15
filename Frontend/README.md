## Inspiration
Toronto is Canada’s largest city with over 2.93 million people. There are over 10000 people homeless in Toronto every night. Therefore finding shelters for these individuals is intimidating and challenging. With Toronto’s daily shelter occupancy database, we wanted to develop an app that can provide information to individuals in a convenient and user-friendly manner. 
## What it does
ShelterTO assists users in finding a shelter in Toronto that acclimates to their needs. They are automatically sorted by occupancy level. Clients can also see if a shelter is at capacity or if it has occupancy for them. If a user has a specific shelter in mind, they can search for it through our integrated search-bar at the top. The integrated google maps API lets clients see the geographic location of the shelter. They can even click the “go to google maps” button to open the location in google maps.
## How we built it
The frontend web app was built using React.js and CSS to provide users with a clean and easy to use design. On the backend we used Node.js to fetch data from the City of Toronto Data API, and used Algolia to index all the sanitized results. The Algolia API was also used with React to create the search feature. We also used the Google Maps API which allows ShelterTO users to see the location of shelters, with respect to common landmarks and shops. The Maps API also allows us direct users maps.google.com to get more information about the shelter, contact information, and directions, providing a seamless integration from our system to google maps. Currently, we are hosting on Google Cloud using Cloud Run to run our backend Node App and host our frontend web app. The site can be accessed at shelterto.online. 
## Challenges we ran into
Google Maps was difficult to implement and style, and required a lot of code revision.
## Accomplishments that we're proud of
Using Algolia’s database to generate capacity indicators from low to high, identified by bed colours
## What we learned
-Do not be too ambitious with ideas, instead be realistic
-Sleep is important 
-Homelessness is a big issue that cannot be tackled overnight and within 24 hours. Designing useful systems like ShelterTO is one of the ways that such a wide-scale issue could one day be solved using amicable means.  
## What's next for ShelterTO
ShelterTO is still a program under development and still contains many glitches, and formatting issues. In addition, This website has the potential to work with other shelters throughout Canada given the correct data. There were features we wanted to aim for, like sort and filter buttons as well as the option to open directions externally in Google Maps.
