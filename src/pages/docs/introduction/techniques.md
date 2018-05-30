---
title: "Foundational techniques to make your APIs evolvable"
description: ""
layout: "guide"
icon: "flash"
weight: 2
---


As stated in the previous sections, there are several different facets that help to build Evolvable APIs.

There are some which can be considered as techniques that can be implemented in different ways (like Hypermedia, which is a concept but can several different implementations), other are a set of guidelines, patterns or standards. We can consider it as the **building blocks** that make possible Evolvable APIs.

<article id="1">

## Hypermedia

Consumers, like mobile apps, should not hardcode the navigation from one user interface (let it be a screen, a web page or a panel) to another. It should neither specify directly the actions that the user can take in each screen.

Then, how can consumers of an API face the navigation of the application through all the different unknown possibilities that hide behind the API contract?

To enable this, each API response should provide a list of possible operation as either read-only links or actions. Each operation has a type (e.g., IANA link relations) that the consumer knows how to deal with (e.g., follow a link automatically, present an action to a user, etc...). APIs using hypermedia let the API provider control the available operations, which simplifies the consumer and decouples it from the server.

To support a wide variety of functionality provided by an API, a consumer only needs to support one standard hypermedia format, and follow standard link types (e.g., IANA link relations).

That way, Hypermedia, can be seen as the mechanism that enables the autodiscovering (or scouting) of all the different resources, and actions that the server can provide.

</article>

<article id="2">

## Shared Vocabularies

Use carefully crafted message types that are focused on the needs of the consumers, instead of how the API is implemented *today*.

It’s useful to speak a language that will result familiar to the developers of clients for your APIs. Using the same language means less misunderstandings, and it eases other participants to start talking to your API. Using your own slang or assigning specific meanings you only know, will make more difficult to others to understand what you are saying.

Any organization, group or individual has a different way to communicate depending on the context in which they are. For example: you can refer to things with an informal name when you are talking to your kids, or you can use slang when talking with your friends, or you can have specific aliases or specific names for certain concepts inside your company, even specific properties….

But when you need to communicate with the external world, let’s say you need to write an article for the press, negotiate something with someone that does not belong to your inner circle, or prepare some marketing messages, in that case, you will probably switch to a common standard way of expressing things to ensure that your partner understands the same thing you are expressing.

That is: when you get out of your inner group, organization or ambient, you won’t want to use your specific words that maybe you only understand, you will use the concepts and words that you know everyone out there will assign the same meaning that you.

With your API the same rule applies: Your internal model, your concrete naming, your specific attributes should be kept for your inner realm. Instead, you should expose the resources, attributes and concepts with not only a naming, also a structure, typing and possible constraint rules on its values that are of common use.

That way you can leverage your API to be well used by a broad set of consumers, that will be understanding and using your contract with a common meaning.

For that matter, there are some already agreed standard vocabularies (e.g, schema.org) that you can use and even extend if you need to. But the key point here is that you are using a common way to name and structure the model you expose.

Of course, that will mean that you need to find a way to ‘translate’ between your internal model and the public model using that standard vocabularies. But you can use the Representor pattern to accomplish that and decouple the internal model and external contract.

The main benefit of leveraging standard vocabularies  is that API developers can make internal changes freely. Consumer developers therefore benefit from much more reuse across applications.

</article>

<article id="3">

## Standards

Part of the key to succeed in any environment is the ability to do the things in the same way that everyone does, that is sticking to the standards.

And that’s what also made the Web succeed, scale and adapt to the evolution.

For your API, you will find useful to use Standards whenever they are available and they address one of your needs. For example:

* HTTP as communication protocol (not just transport protocol), with their methods, headers, response codes and all the semantics that are already defined in it. Have I heard anyone thinking in REST? ;)

* Hypermedia MIME types. Choose at least one (or more) of the defined standards to communicate the navigation and options that the client can take. There are several different ones: HAL, Siren, JSON-LD, Collection+JSON… Read of them and chose whichever best fits your needs.

* IANA Link Relations. If you need to add links between resources. Some Hypermedia Types are already using IANA Link Relations.

{call DocsList.render}
	{param section: $page /}
{/call}

</article>
