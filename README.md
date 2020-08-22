# LEAN
Learn While Earning, Upscaling All Workers

IMPORTANT
## Other content:

If you want to take a look at the **admin panel**, please click here: [Youtube](https://youtu.be/TZ6_DHWR99c?t=149)
Do you want to look at the **entire video** with research? Please click here" [Youtube](https://youtu.be/TZ6_DHWR99c)

## Inspiration
Due to the COVID-19 pandemic, many low skill workers have lost their jobs resulting in record breaking numbers. The civilian unemployment rate is **currently at 10.2%.**
That leaves **16.3 million people unemployed.** As a result, The Mad Hackers decided to tackle this extreme issue which has lost the primary source of income for many families. It is essential for these workers not have this vulnerability right now and in the future and as a result we have created LEAN to help solve this issue.

## What it does

LEAN has 2 main components: an admin panel and a user panel. The admin panel allows the company to upload information and see current candidates. We chose to not make this an aggregator because the employer has to be willing to have employees without a college degree - merely online certificates and whatever projects they come up with from those online courses. Employers get the benefit of having a qualified employee for a lower starting price, whereas employees get higher paying jobs than what they already have and once they leave the company, they can use that experience to catapult themselves. The user panel allows the user to get information about various jobs that are around, like a standard job-finding app. **However, what makes LEAN stand out is that it allows users to learn the skills from MOOCs, which you can search for within the app itself.**

LEAN also helps you look at **job trends** with a **built-in prediction view**, filled with interactive visualizations and graphs. 

You can find yourself a temporary job within LEAN too! Just go to the low-skill jobs pane, and find something that interests you. That way, you can make money while learning and preparing for your next job. You can also get money by going to the funding pane to take a look at different loan and scholarship opportunities (not included in video - added after recording and submission - will be pushed to GitHub soon).

LEAN also has a **forum for users to be able to talk with each other about their experiences and support each other.**

LEAN also has an integrated **Projections tab** for jobs in the workforce for insight of the future

LEAN also has a **Courses tab** which allows you to input your courses and it will use an API in order to retrieve courses.
## How I built it

The Admin panel was build using Vue.js. We used buefy to create a simple but elegant theme that made development both quick and stylist. Then, we use Google Cloud Firestore to manage our data in the cloud so that information could eventually be read by the prospective employee. 

The course search integration was built in much of the same way, linking to Classpert to leverage their huge database of MOOCs across over 30 websites. This was then integrated into the application.

The job trends panel was custom-built using Datawrapper to create interactive visualizations, using data from the US Bureau of Labor Statistics. These panes where then embedded into the application.

The forum was created using tribe.so, an application similar to discourse. We chose this because it has a lot of features and is styled extremely well. We linked that into the application similarly to others.

The react native app was created using several apis and features. For the Home page, we used Google Cloud FireStore to store and retrieve data to manage the employer/admin and user interfaces. This would allow the posts from the employer on the web, to be posted on the react native app. For UI, we used react-native-base which allowed for more customizations than we previously had in order to provide the app a more premium and modern feel. For the courses tab, we created a page using an API provided by ClassPert in order to get the course data retrieval. We used react-native-maps in order to create the maps interface and find the current location of the user and display it. Additionally, the API provided by Indeed.com allowed us to retrieve temporary jobs within queries we passed through it. For the forum page, we used tribe.so and Web-View in order to integrate the forum into the application and make it readily modifiable by users. For the design tabs and the cool animation, I used react native navigation material tab navigators which allowed for the rich animations.

## Challenges I ran into
There were challenges in implementing the UI on the RN App due to deprecations and Dependency errors.
There were challenges with GitHub not allowing files to be pushed correctly
There were challenges figuring out how to access certain datapoint
There were challenges with getting image uploading for the admin panel (logo).
There were challenges with making sure that data was being worked with properly, as sometimes, the views themselves would have impediments blocking us for hours.
## What I learned
I learned how to manage time, how to work efficiently, how to not procrastinate and how to work together with multi-platform concepts which I had never implemented before. 
## What's next for LEAN
We hope to implement this app into the google play and iOS app stores to help those currently in need of such an app. We plan on styling better in order to get a more professional design. Additionally, we hope to add more features allowing for the user to connect to the employer more easily. We have many other ideas that we wish to implement, however time is one constraint that will always limit us but yet pushes us to work our hardest.

We would like to thank these hackathons we participated in for giving us the ability to demonstrate our skills and also challenging us to push them. We both found it to be a very valuable experience.
