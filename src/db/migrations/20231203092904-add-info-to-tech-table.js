'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const data = [
      {
        "title": "React",
        "subheader": "Frontend",
        "content": "A JavaScript library for building user interfaces.",
        "expandableContent": "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
      },
      {
        "title": "Node.js",
        "subheader": "Backend",
        "content": "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
        "expandableContent": "Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices."
      },
      {
        "title": "Angular",
        "subheader": "Frontend",
        "content": "A platform for building mobile and desktop web applications.",
        "expandableContent": "Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges."
      },
      {
        "title": "Django",
        "subheader": "Backend",
        "content": "A high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
        "expandableContent": "Built by experienced developers, Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel."
      },
      {
        "title": "Vue.js",
        "subheader": "Frontend",
        "content": "The Progressive JavaScript Framework.",
        "expandableContent": "Vue.js is designed from the ground up to be incrementally adoptable. The core library focuses on the view layer only, and is easy to pick up and integrate with other libraries or existing projects."
      },
      {
        "title": "PostgreSQL",
        "subheader": "Database",
        "content": "An advanced open source relational database.",
        "expandableContent": "PostgreSQL offers sophisticated features such as Multi-Version Concurrency Control (MVCC), point in time recovery, tablespaces, and more. It's known for its stability and robustness."
      },
      {
        "title": "Flask",
        "subheader": "Backend",
        "content": "A lightweight WSGI web application framework in Python.",
        "expandableContent": "Flask is designed to be easy to use and extend, making it a great choice for building simple web applications and rapid prototyping in Python."
      },
      {
        "title": "Docker",
        "subheader": "Backend",
        "content": "A platform for developing, shipping, and running applications in containers.",
        "expandableContent": "Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. Containers are lightweight and provide a consistent, portable software environment."
      },
      {
        "title": "Kubernetes",
        "subheader": "Backend",
        "content": "An open-source system for automating deployment, scaling, and management of containerized applications.",
        "expandableContent": "Kubernetes provides a framework to run distributed systems resiliently, scaling up or down as needed, handling failover, and providing deployment patterns like canaries."
      },
      {
        "title": "TensorFlow",
        "subheader": "Backend",
        "content": "An open source library for numerical computation and machine learning.",
        "expandableContent": "TensorFlow offers a comprehensive ecosystem of tools, libraries, and community resources that lets researchers push the state-of-the-art in ML, and developers easily build and deploy ML-powered applications."
      },
      {
        "title": "AWS",
        "subheader": "Backend",
        "content": "A subsidiary of Amazon providing on-demand cloud computing platforms.",
        "expandableContent": "AWS offers a broad set of global cloud-based products including compute, storage, databases, analytics, networking, mobile, developer tools, management tools, IoT, security, and enterprise applications."
      },
      {
        "title": "React Native",
        "subheader": "Frontend",
        "content": "A framework for building native apps using React.",
        "expandableContent": "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch."
      },
      {
          "title": "Express.js",
          "subheader": "Backend",
          "content": "A minimal and flexible Node.js web application framework.",
          "expandableContent": "Express.js provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node-based web applications."
        },
        {
          "title": "Ruby on Rails",
          "subheader": "Backend",
          "content": "A server-side web application framework written in Ruby.",
          "expandableContent": "Rails is a model–view–controller (MVC) framework, providing default structures for databases, web services, and web pages. It encourages the use of web standards such as JSON or XML for data transfer, and HTML, CSS, and JavaScript for display and user interfacing."
        },
        {
          "title": "MySQL",
          "subheader": "Database",
          "content": "An open-source relational database management system.",
          "expandableContent": "MySQL is a central component of the LAMP open-source web application software stack. It is used by many database-driven web applications, including Drupal, Joomla, phpBB, and WordPress."
        },
        {
          "title": "SQL Server",
          "subheader": "Database",
          "content": "A relational database management system developed by Microsoft.",
          "expandableContent": "As a database server, SQL Server is a software product whose primary function is to store and retrieve data as requested by other software applications, which may run either on the same computer or on another computer across a network."
        },
        {
          "title": "Svelte",
          "subheader": "Frontend",
          "content": "A modern JavaScript compiler that generates highly efficient code.",
          "expandableContent": "Unlike traditional frameworks, Svelte shifts much of the work to compile time, producing smaller and more efficient code for browsers to run."
        },
        {
          "title": "Bootstrap",
          "subheader": "Frontend",
          "content": "The most popular HTML, CSS, and JS library in the world.",
          "expandableContent": "Bootstrap is an open-source toolkit for developing with HTML, CSS, and JS. It provides design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions."
        },
        {
          "title": "Oracle Database",
          "subheader": "Database",
          "content": "A multi-model database management system produced and marketed by Oracle Corporation.",
          "expandableContent": "It is a database commonly used for running online transaction processing (OLTP), data warehousing (DW), and mixed (OLTP & DW) database workloads."
        },
        {
          "title": "MongoDB",
          "subheader": "Database",
          "content": "A source-available cross-platform document-oriented database program.",
          "expandableContent": "Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. It provides high performance, high availability, and easy scalability."
        },
        {
          "title": "React Native",
          "subheader": "Mobile",
          "content": "A framework for building native apps using React.",
          "expandableContent": "React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components."
        },
        {
          "title": "Flutter",
          "subheader": "Mobile",
          "content": "Google’s UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
          "expandableContent": "Flutter works with existing code, is used by developers and organizations around the world, and is free and open source."
        },
        {
          "title": "Swift",
          "subheader": "Mobile",
          "content": "A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS.",
          "expandableContent": "Swift is a fast and efficient language that provides real-time feedback and can be seamlessly incorporated into existing Objective-C code. So developers can write safer, more reliable code, save time, and create richer app experiences."
        },
        {
          "title": "Kotlin",
          "subheader": "Mobile",
          "content": "A modern programming language that makes developers happier.",
          "expandableContent": "Fully supported by Google for Android development, Kotlin is a concise and powerful language. It interoperates fully with Java and comes with no runtime overhead."
        },
        {
          "title": "Xamarin",
          "subheader": "Mobile",
          "content": "A Microsoft-owned framework used for building mobile apps with C# and .NET.",
          "expandableContent": "Xamarin allows developers to write the application's user interface code once in C#, and run it on both Android and iOS devices. It extends the .NET developer platform with tools and libraries specifically for building apps for Android, iOS, tvOS, watchOS, macOS, and Windows."
        },
        {
          "title": "Ionic",
          "subheader": "Mobile",
          "content": "A complete open-source SDK for hybrid mobile app development.",
          "expandableContent": "Built on top of AngularJS and Apache Cordova, Ionic provides tools and services for developing hybrid mobile apps using Web technologies like CSS, HTML5, and Sass."
        },
        {
          "title": "Cordova",
          "subheader": "Mobile",
          "content": "A mobile application development framework that enables developers to build applications for mobile devices using CSS3, HTML5, and JavaScript.",
          "expandableContent": "Apache Cordova encapsulates the application within a WebView browser window, and relies on standard web technologies."
        },
        {
          "title": "SQLite",
          "subheader": "Database",
          "content": "A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.",
          "expandableContent": "SQLite is the most used database engine in the world. It is built into all mobile phones and most computers and comes bundled inside countless other applications that people use every day."
        },
        {
          "title": "MariaDB",
          "subheader": "Database",
          "content": "A community-developed, commercially supported fork of the MySQL relational database management system.",
          "expandableContent": "MariaDB intends to maintain high compatibility with MySQL, ensuring a drop-in replacement capability with library binary equivalency and exact matching with MySQL APIs and commands."
        },
        {
          "title": "Cassandra",
          "subheader": "Database",
          "content": "A free and open-source, distributed, wide column store, NoSQL database management system designed to handle large amounts of data across many commodity servers.",
          "expandableContent": "Cassandra offers robust support for clusters spanning multiple datacenters, with asynchronous masterless replication allowing low latency operations for all clients."
        },
        {
          "title": "Redis",
          "subheader": "Database",
          "content": "An open-source, in-memory data structure store, used as a database, cache, and message broker.",
          "expandableContent": "Redis supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams."
        },
        {
          "title": "Couchbase",
          "subheader": "Database",
          "content": "An open-source, distributed multi-model NoSQL document-oriented database software package that is optimized for interactive applications.",
          "expandableContent": "Couchbase Server provides easy scalability, consistent high performance, 24×365 availability, and a flexible data model for ease of development."
        },
        {
          "title": "Neo4j",
          "subheader": "Database",
          "content": "A graph database management system developed by Neo4j, Inc.",
          "expandableContent": "Described by its developers as an ACID-compliant transactional database with native graph storage and processing, Neo4j is available in a GPL3-licensed open-source 'community edition', with a commercial license available for enterprise deployments."
        },
        {
          "title": "Elasticsearch",
          "subheader": "Database",
          "content": "A search engine based on the Lucene library, providing a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents.",
          "expandableContent": "Elasticsearch is developed in Java and is released as open-source under the terms of the Apache License. It is widely used for search and analytics use cases and is part of the Elastic Stack."
        },
        {
          "title": "HTML5",
          "subheader": "Frontend",
          "content": "The latest version of the Hypertext Markup Language, the code that describes web pages.",
          "expandableContent": "HTML5 introduces a number of new elements and attributes that reflect typical usage on modern websites. It also focuses on the needs of mobile devices, improving the handling of multimedia content, and making it more easily readable by humans and consistently understood by computers and devices."
        },
        {
          "title": "CSS3",
          "subheader": "Frontend",
          "content": "The latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1.",
          "expandableContent": "It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts."
        },
        {
          "title": "JavaScript (ES6+)",
          "subheader": "Frontend",
          "content": "A scripting language that enables you to create dynamically updating content, control multimedia, animate images, and much more.",
          "expandableContent": "ES6 introduces several new features like arrow functions, template literals, class syntax, and enhanced object literals, which greatly enhance the JavaScript language and enable more powerful and complex applications."
        },
        {
          "title": "TypeScript",
          "subheader": "Frontend",
          "content": "An open-source language which builds on JavaScript by adding static type definitions.",
          "expandableContent": "Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly."
        },
        {
          "title": "Sass/SCSS",
          "subheader": "Frontend",
          "content": "A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).",
          "expandableContent": "Sass allows more complex styling with variables, nested rules, mixins, inheritance, and more, helping to organize large stylesheets."
        },
        {
          "title": "Webpack",
          "subheader": "Frontend",
          "content": "A static module bundler for modern JavaScript applications.",
          "expandableContent": "When webpack processes your application, it internally builds a dependency graph and uses this graph to generate an optimized bundle where scripts are executed in the correct order."
        },
        {
          "title": "Babel",
          "subheader": "Frontend",
          "content": "A JavaScript compiler that allows you to use next generation JavaScript, today.",
          "expandableContent": "Babel converts ECMAScript 2015+ code into a backwards-compatible version of JavaScript that can be run by older JavaScript engines."
        },
        {
          "title": "React Router",
          "subheader": "Frontend",
          "content": "A collection of navigational components that compose declaratively with your application.",
          "expandableContent": "Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering."
        },
        {
          "title": "Django REST Framework",
          "subheader": "Backend",
          "content": "A powerful and flexible toolkit for building Web APIs with Django.",
          "expandableContent": "The Django REST Framework is a highly customizable framework for building RESTful APIs. It works well with the Django ORM and can be used to create a browsable API."
        },
        {
          "title": "Spring Boot",
          "subheader": "Backend",
          "content": "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can 'just run'.",
          "expandableContent": "It takes an opinionated view of the Spring platform, which paves the way for a faster and more efficient development setup. Spring Boot can be used to create RESTful APIs with minimal configuration."
        },
        {
          "title": "ASP.NET Core",
          "subheader": "Backend",
          "content": "A cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications.",
          "expandableContent": "ASP.NET Core is optimized for building applications with cloud-based deployment, a seamless experience for creating APIs, and the ability to run on Windows, macOS, and Linux."
        }, {
          "title": "GraphQL",
          "subheader": "Backend",
          "content": "A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.",
          "expandableContent": "GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, and makes it easier to evolve APIs over time."
        },
        {
          "title": "FastAPI",
          "subheader": "Backend",
          "content": "A modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.",
          "expandableContent": "FastAPI allows for easy creation of APIs with automatic request validation and interactive API documentation. It's particularly suited for building high-performance RESTful APIs."
        },
        {
          "title": "ASP.NET Core Identity",
          "subheader": "Backend",
          "content": "An API that supports user interface (UI) login functionality in ASP.NET Core.",
          "expandableContent": "ASP.NET Core Identity is a membership system that adds login functionality to ASP.NET Core apps. It's highly configurable and supports external authentication with Google, Twitter, and more."
        },
        {
          "title": "SignalR",
          "subheader": "Backend",
          "content": "A library for ASP.NET developers that simplifies the process of adding real-time web functionality to applications.",
          "expandableContent": "Real-time web functionality is the ability to have server-side code push content to connected clients instantly as it becomes available, rather than having the server wait for a client to request new data."
        },
        {
          "title": "Entity Framework",
          "subheader": "Backend",
          "content": "An open-source object-relational mapping framework for ADO.NET, part of the .NET Framework.",
          "expandableContent": "The Entity Framework is a set of technologies in ADO.NET that support the development of data-oriented software applications. Developers work with data in the form of domain-specific objects and properties, without having to concern themselves with the underlying database tables and columns where this data is stored."
        },
        {
          "title": "ASP.NET MVC",
          "subheader": "Backend",
          "content": "A web application framework developed by Microsoft, which implements the model–view–controller (MVC) pattern.",
          "expandableContent": "ASP.NET MVC gives you a powerful, patterns-based way to build dynamic websites that enables a clean separation of concerns and that gives you full control over markup for enjoyable, agile development."
        },
        {
          "title": "ASP.NET Web API",
          "subheader": "Backend",
          "content": "A framework for building HTTP services that can be accessed from any client including browsers and mobile devices.",
          "expandableContent": "It is an ideal platform for building RESTful applications on the .NET Framework. ASP.NET Web API is an extension of WCF REST API."
        },
        {
          "title": "Meteor",
          "subheader": "Fullstack",
          "content": "An open-source platform for web, mobile, and desktop.",
          "expandableContent": "Meteor is a full-stack JavaScript platform that enables developers to quickly build reactive web and mobile applications. It integrates with MongoDB and uses the Distributed Data Protocol and a publish–subscribe pattern to automatically propagate data changes to clients without requiring the developer to write any synchronization code."
        },
        {
          "title": "Nuxt.js",
          "subheader": "Fullstack",
          "content": "An intuitive Vue framework for building server-side rendered applications, static sites, and more.",
          "expandableContent": "Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable. It aims to make the development process as easy as possible and create a powerful application by utilizing server-side rendering."
        },
        {
          "title": "Feathers",
          "subheader": "Fullstack",
          "content": "A lightweight web framework for creating real-time applications and REST APIs using JavaScript or TypeScript.",
          "expandableContent": "Feathers can interact with any backend technology, supports over a dozen databases out of the box, and works with any frontend technology like React, Vue.js, or Angular."
        },
        {
          "title": "LoopBack",
          "subheader": "Fullstack",
          "content": "A highly extensible Node.js and TypeScript framework for building APIs and connecting them with backend data sources.",
          "expandableContent": "LoopBack enables you to quickly compose scalable models, data sources, and services. It comes with a built-in explorer to discover your API endpoints and a wide range of connectors for various database systems."
        },
        {
          "title": "RedwoodJS",
          "subheader": "Fullstack",
          "content": "An opinionated, full-stack, serverless web application framework for building JAMstack applications.",
          "expandableContent": "RedwoodJS brings full-stack to the JAMstack. It offers a unique developer experience by melding React, GraphQL, and Prisma into a single full-stack solution, with an emphasis on robustness and flexibility."
        }
    ]

    //insert to Technology table
    await queryInterface.bulkInsert('Technology', data.map((item) => {
      return {
        name: item.title,
        description: item.expandableContent,
        short_description: item.content,
        type: item.subheader,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }), {});

  }
};
