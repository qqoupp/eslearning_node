'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const data = [
     {
    "name": "Social Networking for Programmers",
    "type": "Web Application",
    "description": "A platform where programmers can share projects, connect and collaborate."
  },
  {
    "name": "AI Personal Finance Assistant",
    "type": "Mobile Application",
    "description": "An AI-powered app that helps users manage their personal finances by providing insights and predictions based on their spending habits."
  },
  {
    "name": "Virtual Reality Travel Experiences",
    "type": "VR Application",
    "description": "Virtual reality app that lets users tour and experience destinations around the world from the comfort of their homes."
  },
  {
    "name": "Eco-friendly Route Planner",
    "type": "Mobile/Web Application",
    "description": "An application that finds the most eco-friendly routes and means of transport for urban travel."
  },
  {
    "name": "Freelancer Invoicing Service",
    "type": "Web Application",
    "description": "A web service that simplifies the invoicing process for freelancers by automating reminders and integrating with payment systems."
  },
  {
    "name": "Interactive Learning Platform",
    "type": "Web Application",
    "description": "An interactive web application for online learning that uses quizzes and games to make education fun."
  },
  {
    "name": "Fitness Tracker App",
    "type": "Mobile Application",
    "description": "A mobile app that tracks fitness activities, sets goals, and monitors progress over time."
  },
  {
    "name": "Smart Home Controller",
    "type": "IoT Application",
    "description": "A smart system that allows users to control home appliances and security systems remotely."
  },
  {
    "name": "Recipe and Nutrition Guide",
    "type": "Mobile/Web Application",
    "description": "An app that offers healthy recipes and tracks nutritional intake."
  },
  {
    "name": "Event Management Platform",
    "type": "Web Application",
    "description": "A comprehensive tool for event planners to manage events, bookings, and payments."
  },
  {
    name: "Artificial Intelligence Blog Platform",
    type: "Web Application",
    description: "A blogging platform with AI features to analyze reader engagement and suggest content strategies."
  },
  {
    name: "Cryptocurrency Portfolio Tracker",
    type: "Mobile Application",
    description: "An app for tracking cryptocurrency investments and market trends."
  },
  {
    name: "Augmented Reality Shopping Experience",
    type: "AR Application",
    description: "An augmented reality app to try out products virtually at home before purchasing."
  },
  {
    name: "Automated Social Media Manager",
    type: "SaaS",
    description: "A service that uses AI to manage social media posts and audience interactions."
  },
  {
    name: "Remote Team Collaboration Tool",
    type: "Web Application",
    description: "A set of tools for remote teams to collaborate effectively, including video calls, task management, and real-time document editing."
  },
  {
    name: "Fitness Tracker Integrator",
    type: "Mobile Application",
    description: "An application that aggregates data from various fitness trackers into a single dashboard."
  },
  {
    name: "Smart Home Automation App",
    type: "IoT Application",
    description: "A centralized app to control various smart home devices with automation capabilities."
  },
  {
    name: "Interactive Language Learning App",
    type: "Mobile Application",
    description: "A language learning application that uses speech recognition and interactive games to enhance learning."
  },
  {
    name: "DIY Project Crowdsourcing Platform",
    type: "Web Application",
    description: "A web platform where DIY enthusiasts can share, vote on, and collaborate on various projects."
  },
  {
    name: "Online Coding Bootcamp",
    type: "Educational Service",
    description: "A comprehensive online bootcamp offering live coding classes, peer programming, and project-based learning."
  },
  {
    name: "Blockchain-Based Voting System",
    type: "Blockchain Application",
    description: "A secure and transparent voting platform for organizations based on blockchain technology."
  },
  {
    name: "E-commerce AR Try-On Feature",
    type: "Web/Mobile Application",
    description: "An augmented reality feature for e-commerce platforms that allows customers to try on clothes virtually."
  },
  {
    name: "NFT Marketplace for Digital Art",
    type: "Web Application",
    description: "A marketplace for buying, selling, and trading non-fungible tokens (NFTs) representing digital art."
  },
  {
    name: "Custom Recipe Generator",
    type: "Web Application",
    description: "A web app that generates custom recipes based on user's pantry items and dietary preferences."
  },
  {
    name: "Real-Time Public Transport Tracker",
    type: "Mobile Application",
    description: "A mobile app that provides real-time updates and tracking for public transportation."
  }
    ]

   
    await queryInterface.bulkInsert('ProjectIdeea', data.map((item) => {
      return {
        name: item.name,
        description: item.description,
        type: item.type,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }), {});

  }
};
