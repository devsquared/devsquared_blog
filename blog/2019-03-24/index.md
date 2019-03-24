---
title: My First Dev Conference - 2019 DevNexus
date: '2019-03-24T22:16:03.284Z'
category: "Coding"
tags: ['Coding']
banner: "/assets/bg/1.jpg"
---

I attended DevNexus 2019! This Java conference has been held yearly in Atlanta for quite a few years now.  It was great to explore a new city (albeit lightly), hang out amongst a lot of other software developers, and learn a lot for a few days. The conference this year seemed to have a few major themes: cloud-forward everything, evolving architecture, and continuing to move towards functional programming. In this post, I roundup and recap a lot of my trip.

Keep in mind that I will be going much further in depth into a lot of these topics in the near future with talks, blog posts, and tutorials. If you do not get all the detail or information you want from these brief explanations, stick around. Further, feel free to reach out to me on [Twitter](https://twitter.com/devissquared) if you would like more info or are particularly interested in a certain topic.

Also I try to give links to any relevant information that I can within the content. Some of it are links to videos of the presentations at other conferences. The recordings for DevNexus has not yet been made available.

## Goals Prior to Attending

I do want to take a second and outline some of the goals that I had going into the conference. The last one is a goal of mine all of the time.

- Learn about moving legacy code to newer architectures
- Learn all the new hotness with serverless, cloud-native functions, and similar **buzzwords**
- Learn about Groovy to help some of our testing efforts at work
- Eat good food (an obvious goal for visiting any place, especially a new one)

## General Thoughts

From the moment that the conference started, I was having a great time. The venue was fairly nice, which was fine considering it was moved here as a backup due to the Super Bowl being held in Atlanta only a month or so before. Only complaint here is that the vendor booths were crammed into a smaller hallway than seemed necessary with a wide hall close by. The keynote stage was really well done with 6 screens so that nobody missed a thing. And I had coffee provided every morning and afternoon, which is always a great thing.

### Keynotes 

The keynotes were all great. Three in total:

- The first one given by [Venkat Subramaniam](https://twitter.com/venkat_s) had a great comparison in it - Imperative is to Functional as wave is to particle when talking about light. Meaning that rather than argue which is better (imperative or functional) when talking about approaches to programming, why not think of it as a duality like the [wave-particle duality](https://en.wikipedia.org/wiki/Wave%E2%80%93particle_duality) of light? I think that this was nice to hear after recently hearing coworkers argue back and forth on the two approaches' behalf. Both have issues when left by themselves (not the coworkers, the schools of thought), but the amount of either that is deemed best has long been the question. Do I write X in this approach even though it feels long, sloppy, and hard to read? Or, do I write Y in this other approach though it feels disconnected, complex, and difficult to write? The answer seems to be in the middle. 
- The next given by the CTO of ThoughtWorks, [Rebecca Parsons](https://www.thoughtworks.com/profiles/rebecca-parsons), was also very interesting and well-done. Let me tell you that one of my favorite parts of this talk was the design of the slide deck. Crisp, all-white slides with single lines of black text along with all-black title slides that had a single, thick-weighted white title; images took up a separate slide without any other content. It was so good that that night I created a custom slide theme after it. The talk itself was about evolutionary architecture and getting your application there. She talked about applying a fitness function to your architecture with which to constantly measure your applications health and gain insights into what needs to be done. This fitness function created with multiple "-ilities" (maintainability, testability, scalability, etc), but - crucially - not all of the "-ilities". Also priorities on what needs to be fixed and done first. I enjoyed hearing this talk as I have never applied this kind of thinking to architecture.
- The third was one of my favorites from the entire weekend. [Leadership Guide for the Reluctant Leader](https://www.youtube.com/watch?v=0h5X5UKWao8&t=2559s) was a great talk about being a better coworker and becoming a leader. Though this talk had nothing technical in it, it was great to hear [David Neal](https://twitter.com/reverentgeek) give his experience of climbing up to leadership roles and some of the pains and awkwardness that came about. I highly recommend both following him on Twitter and checking at his talk on Youtube. Not only was he a great presenter but he also draws all of his slides. Was a great kickoff to the second day of presentations with plenty of good laughs.

### Day One Highlights

I was really interested to attend presentations as this was my first time to be in person at a conference rather than just behind a video of it. My favorite presentations were as follows:

- A developer and dev advocate from IBM, [gcharters](https://twitter.com/gcharters) and [Steve Poole](https://twitter.com/spoole167) respectively, gave a talk on cloud native Java and a bit about serverless technology. This talk was the first that I had learned about [Open Liberty](https://openliberty.io/) and first I had seen [IBM Cloud](https://www.ibm.com/cloud/) in use. The talk was very informative and came with a tutorial (which is huge brownie points from me). If you stopped by the IBM booth at the conference, you could mess around with all of the things talked about in the talk and earn a free shirt (best believe I did that!). The other thing that I really appreciated from this talk was that these were potential solutions that one could explore, though serverless is not the answer for every problem. This was a little refreshing after hearing (what seemed like) a thousand conversations of how attendees were going to move from a [Monolith](https://en.wikipedia.org/wiki/Monolithic_application) to [Serverless](https://www.serverlessops.io/what-is-serverless) when they got back to work.
- A [technique](https://github.com/mikestowe/REST-API-Multiple-Request-Chaining) for chaining REST calls together was unveiled in another talk. The talk went over some of the issues that a lot of API architectures have had as we have progressed - think SOAP, REST, GraphQL. [Mike](https://twitter.com/mikegstowe) did a great job of talking about some of each API's strengths/weaknesses and use cases. 
- My favorite talk of day one had to have been [Badass 101](https://www.youtube.com/watch?v=I9SqEvUOAoM&t=448s). This talk had the best abstract (simply a paragraph explaining something to the effect of Chuck Norris not providing an abstract but we should attend to avoid potentially catching a roundhouse kick to the face) and then great content. This talk covered a lot of areas of the concept of "soft skills", though I prefer we call them people skills (or human skills, as that's what they are). I recommend that you watch this talk and be a badass!

I also went to a local restaurant called Murph's for lunch. And let me tell you that it has a great buffalo chicken sandwich and fries. I love sports bars (probably because I am one with sports and beer is literally my blood), so this place hit the spot. Later in the day, I went to another sports bar in Atlanta to try and catch the Atlanta Hawks game and fellow Sooner Trae Young. However, the bar did not put the game on any of the TVs, I was very sad, and, therefore, I do not want to name this bar.

### Day Two Highlights

Day two was the day that I was expecting everybody to be tired and sluggish. However, I was delightfully surprised starting with the keynote in the morning. The talks throughout day two seemed to go up and down - one would be good and the next would be pretty eh. Most seemed ready to get to the big giveaway at the end of the day. That day gave me two good talks:

- One of the more applicable talks to my work was a talk on Architectures and moving from Monolith to Microservices and maybe onto Serverless. I particularly liked the way that this was organized. [Alberto Salazar](https://twitter.com/betoSalazar) walked through the process of moving (sometimes painfully slowly) from a Monolith to Microservices. He also provided a great [guide](https://github.com/lasalazarr/guide-monolithic-to-microservices) to work through. 
- The talk that I got the most out of was [Burr Sutter's](https://twitter.com/burrsutter) talk on cloud native Java with [Knative](https://cloud.google.com/knative/). First of all, the slide deck, pages of documentation, and plenty of tutorials were given to those in attendance (obvious or not, every presenter needs to make a habit of doing this). This meant that during the presentation, I could sit back and enjoy the show. Burr moved quickly and filled our time with loads of information. This was what I worked on after the second day. Look out for a blog post and a talk coming soon on this topic.

Murph's was so good that I returned there for day two's lunch and had a burger and more local beer - both very good. For my later meal, I tried out Blaze Pizza and was super impressed. Lebron knows where to invest his money.



## Conclusion

I had a lot of fun at my first dev conference - DevNexus 2019 in Atlanta. I learned a lot and now have plenty of new toys to tinker with. My loot haul included 3 t-shirts, 3 pairs of socks, an infinite amount of stickers, and a bottle of hand sanitizer. The food was all very good. The only complaint was that an Atlanta sports bar did not show an Atlanta sports team playing in Atlanta. 

Posts to come as follow up for a more in-depth dive into some of the content that I absorbed. 

