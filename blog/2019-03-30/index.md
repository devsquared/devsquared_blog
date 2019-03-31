```
---
title: Java in the Clouds Talk
date: '2019-03-30T22:16:03.284Z'
category: "Coding"
tags: ['Coding']
banner: "/assets/bg/3.jpg"
---
```

Earlier this week I gave a presentation to my peers at work on utilizing [Quarkus](https://quarkus.io/) to create native Java applications, throw them into a container, and then utilize them in a simple (if such a thing is possible) [Kubernetes](https://kubernetes.io/) stack with [minikube](https://kubernetes.io/docs/setup/minikube/). In this talk, I also touched upon the architecture topics of microservices, serverless, and container-based applications. I found it to be a good talk in that it sparked interest and raised questions. Also, the live demo went fairly smoothly. However, there were parts that I would like to change up. So, without further ado, here are some of my thoughts on my talk.

- First of all, it is important to know that my current place of employment is still supporting a monolithic application. This is fairly important context when thinking about the architecture topics that I brought up in this talk. In our case, it is a major leap from monolith to serverless.

  With this in mind, a thirty-minute talk (it blew up into closer to an hour) was not even close to sufficient to bring up the question of how to evolve our architecture. Nor was it sufficient to discuss the more practical topic of stepping stones to getting there - of which I posed Quarkus as a potentially useful tool in doing so. Right after the talk was over, I realized that my talk kind of split in two different directions - architecture (specifically, monolith to microservices to serverless) and Quarkus. For future talks on the subjects, I need to separate those concerns.

- After the talk was finished, the audience brought up topics such as tools, languages, and the means of arriving at a better architecture. These were very interesting topics that arose which spurred along a conversation for nearly 15 minutes. It seemed some were almost fixed on deciding that to get to the paradise land of the future (a sarcastic name that some colleagues throw towards anything other than a monolith) we needed to decide on the tools and, more specifically, language(s) to create our services in. I think that some even took (and still take) a defensive route, claiming that "this tool/language is the answer", and I don't think that attitude will change. 

  I really enjoyed the conversation. However, the thoughts that followed were better. Many people appeared to look at our system and try to fit it into a solution. Obviously, this rarely ever works. It doesn't make sense to analyze the tools we need before we even understand what our services and needs are. During the talk, I used the metaphor of chiseling away at our monolith until we find things that easily split off. From there, we have things that easily become microservices and, potentially, smaller functions. As we arrive at each new piece that needs to be addressed, we **choose and use the *tools of choice* that *help us solve the problem at hand***. After all, one of the beauties of serverless and splitting our concerns is that we can focus on the task at hand and not worry about the other tasks. 

- Lastly, I really liked the metaphor of chiseling away at the application that we are evolving. Not only does it make sense from the standpoint of "I have 5 million lines of code and can't rework that easily", but it also really helps the health of the app as we go in many ways. Each piece we break out generally becomes smaller, simpler, and more focused. Now we can look at a small piece of software and say it takes *x*, outputs *y*, and does *z*. It's apparent and immediately known if we need it and (sometimes more importantly) if we do not. It also forces us to do a few things:

  - address the issue at hand and only that issue
  - rework or completely rewrite suspect pieces of software
  - bring testing up to date
  - narrow the scope of pieces of software

All in all, the talk was well-received based on the conversations and topics that came from it. I plan to give the talk in the future to local user groups. When I do this, I plan to include the slides and a tutorial. The plan is to narrow the scope of the talk and delve deeper into Quarkus. I think that this will allow people to see the possibilities and to continue from there.