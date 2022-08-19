# UFOs
#### JavaScript, CSS, and HTML

## Overview of Project

JavaScript was used to build a table that stored UFO sighting data for Dana, a UFO-enthusiast. I created filters that made the table fully dynamic and then placed the table into an HTML file so that the data could be filtered and viewed by webpage users. Bootstrap was used to customize the webpage and equip the table with several functioning filters. 

## Results

The interactive webpage is very simple to use. Webpage users can filter their search by date, city, state, country, and/or shape to find information about specific UFO sightings. For example, below is a screenshot of the webpage after the date 1/13/2010 was entered into the date filter. 

![Results](https://user-images.githubusercontent.com/101427781/185674452-87c3fbf0-778f-43f4-aeaf-78d664d1ef5f.png)

After filtering the specific date I wanted, three sightings on 1/13/2010 were displayed, along with all of the other details about the sightings.

It is important to note that there are placeholders in all of the filter boxes, which demonstrate how a user should input the information. Dates that are entered into the filter need to have the same structure as the placeholder, if they are not structured properly, there may not be any search results.

## Summary

### Drawback

One drawback of this design is the inability to pull new UFO sightings data from the internet. The current webpage is getting its sightings data from a JavaScript file that Dana created, but it is out of date.

### Recommendations

As mentioned above, I would recommend adding a web scraping tool that could actively find new UFO sighting information would elevate this webpage.

Another recommendation would be to add the sources of the UFO sightings. Currently, there is no information about who reported the various UFO sightings. It would make the webpage more credible and would add another layer of information to each entry.

My last recommendation would be to add an interactive map of the individual sightings for users to view where all of the UFO spottings took place around the world.
