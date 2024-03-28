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
