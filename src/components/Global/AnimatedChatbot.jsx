"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Mail, Send, Bot, User } from "lucide-react";

const AnimatedChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm your Upflair virtual assistant. 👋 We specialize in electrical solutions, UPS systems, power infrastructure, and comprehensive maintenance services. How can I help you today? You can ask about our services, get a quote, or learn about our solutions!",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showContactOptions, setShowContactOptions] = useState(false);

    const quickReplies = [
        "Get a Quote",
        "Our Services",
        "Our Solutions", 
        "Contact Info",
        "Business Hours",
        "About Us",
        "UPS Services",
        "Pricing"
    ];

    const botResponses = {
        // General inquiries
        "get a quote": "I'd be happy to help you get a quote! We provide end-to-end electrical solutions from design to execution. Please call us at +91 9035300045 or email sales@upflair.in for a customized quote.",
        "quote": "For a personalized quote on our electrical solutions, please contact our sales team at +91 9035300045 or email sales@upflair.in. We'll assess your needs and provide competitive pricing.",
        
        // Services
        "our services": "We offer 8 core services: 1) UPS Maintenance Contracts, 2) Battery Monitoring, 3) Remote UPS Monitoring, 4) UPS Hire/Rental, 5) UPS Relocation & Disposal, 6) Load Bank Testing, 7) Integrated System Testing, 8) Energy Audit. Which service interests you?",
        "services": "Upflair provides comprehensive electrical testing, analysis, and maintenance services including UPS maintenance, battery monitoring, remote monitoring, UPS rental, load bank testing, and energy audits. Need details on any specific service?",
        "ups services": "Our UPS services include: Maintenance contracts with annual checks, Battery health monitoring, Remote monitoring systems, UPS rental/hire solutions, Professional relocation & disposal, and Load bank testing for reliability.",
        "ups maintenance": "We offer tailored UPS maintenance contracts with reliable service, annual checks, expert guidance, and complete care to ensure your UPS systems operate at peak performance.",
        "battery monitoring": "Optimize your UPS performance with our advanced battery monitoring system for reliable, proactive management. We track battery health and provide early warning alerts.",
        "remote monitoring": "Ensure uninterrupted power with our advanced UPS remote monitoring for seamless, proactive management. Monitor your systems 24/7 from anywhere.",
        "ups hire": "Need temporary power solutions? Our flexible UPS rental service (1kVA to 500kVA) includes delivery, installation, commissioning, and removal. Perfect for events, maintenance, or emergencies.",
        "load bank testing": "Safeguard your UPS with our precise load bank testing, ensuring reliability, validated performance, and issue prevention before critical situations arise.",
        "energy audit": "Our comprehensive energy audits help identify cost-saving opportunities and implement practical renewable energy technology that reduces costs and helps the environment.",
        
        // Solutions
        "our solutions": "We provide 8 comprehensive solutions: 1) Home & Office Solutions, 2) Business Solutions, 3) Industrial Solutions, 4) Data Center Solutions, 5) Green Solutions, 6) Electrical Turnkey Contracts, 7) Video Surveillance, 8) Micro Data Centre FX. What solution interests you?",
        "solutions": "Our solutions cover every sector: Smart home automation, Business energy management, Industrial power systems, Data center infrastructure, Green/renewable energy, Complete electrical projects, Security systems, and edge computing solutions.",
        "home office solutions": "Secure your home and office with our UPS solutions. We provide smart home automation, energy-efficient lighting, security integration, and reliable power backup for PCs and office equipment.",
        "business solutions": "Power your business with online UPS systems, remote monitoring, voltage stabilizers, and batteries. We ensure uninterrupted operations with custom energy audits and cost optimization.",
        "industrial solutions": "Enhance industrial operations with our robust power solutions including industrial UPS systems, power distribution, heavy machinery electrical solutions, and factory automation systems.",
        "data center solutions": "Maximize data center efficiency with specialized UPS solutions, precision cooling, uninterrupted power supply, and comprehensive monitoring for mission-critical environments.",
        "green solutions": "Go green with our sustainable solutions including rooftop solar power, energy storage, green building certifications, and carbon footprint reduction strategies.",
        
        // Contact and company info
        "contact info": "📞 Phone: +91 9035300045\n📧 Email: sales@upflair.in\n📍 Address: Ground floor, Srishyalaya No.523 A, 19th Main Service Road, HSR Layout Sector III, Bengaluru, Karnataka 560102\n🕒 Hours: Monday-Friday, 9 AM to 6 PM IST",
        "contact": "You can reach us at +91 9035300045 or email sales@upflair.in. We're located in HSR Layout, Bengaluru. Our team responds within 24 hours!",
        "phone": "Call us at +91 9035300045. We're available Monday to Friday, 9 AM to 6 PM IST for immediate assistance.",
        "email": "Send us an email at sales@upflair.in and we'll respond within 24 hours with detailed information.",
        "address": "Visit us at: Ground floor, Srishyalaya No.523 A, 19th Main Service Road, HSR Layout Sector III, Bengaluru, Karnataka 560102",
        "location": "We're located in HSR Layout, Sector III, Bengaluru. Easy to reach and well-connected location for client meetings.",
        
        "business hours": "We're available Monday to Friday, 9 AM to 6 PM IST. For urgent matters, feel free to call us directly at +91 9035300045!",
        "hours": "Office hours: Monday-Friday, 9:00 AM - 6:00 PM IST. We also provide emergency response services for critical situations.",
        
        // About company
        "about us": "Upflair Technology specializes in the electrical industry with 60+ completed projects and 500+ happy clients. We provide reliable, efficient solutions from design to execution across India, backed by 24/7 support and extensive technical expertise.",
        "about": "We're Upflair Technology - experts in electrical infrastructure with 2+ years experience, serving both local and multinational companies across India with end-to-end solutions and top-quality results.",
        "company": "Upflair Technology is your trusted partner for electrical solutions. We've successfully completed numerous national-scale commercial and industrial projects with a focus on reliability and customer satisfaction.",
        "experience": "We have 2+ years of proven experience with 60+ successfully completed projects, 500+ satisfied customers, and 24/7 technical support. Our track record speaks for our expertise.",
        
        // Pricing and costs
        "pricing": "Our pricing is competitive and varies based on project scope and requirements. Contact us at +91 9035300045 or sales@upflair.in for a detailed quote tailored to your specific needs.",
        "cost": "Costs depend on the specific solution and project requirements. We offer cost-effective solutions with transparent pricing. Call +91 9035300045 for a personalized quote.",
        "changes in pricing": "Pricing may vary based on project complexity, timeline, and specific requirements. For the most current pricing and any updates, please contact our sales team directly.",
        
        // Greetings
        "hello": "Hello! Welcome to Upflair Technology! 👋 We're specialists in electrical infrastructure and power solutions. How can I help you with UPS systems, power solutions, or electrical services today?",
        "hi": "Hi there! I'm here to help you with Upflair's electrical solutions including UPS maintenance, power systems, battery monitoring, and more. What can I assist you with?",
        "hey": "Hey! Great to see you here. Upflair provides comprehensive electrical solutions for homes, offices, industries, and data centers. What brings you here today?",
        
        // Specific product inquiries
        "ups": "We offer comprehensive UPS solutions including maintenance contracts, battery monitoring, remote monitoring, rental services, and complete UPS systems for homes, offices, and industries.",
        "battery": "Our battery services include health monitoring, testing, maintenance, and replacement. We ensure optimal battery performance for reliable backup power systems.",
        "power solutions": "We provide complete power solutions: UPS systems, voltage stabilizers, power distribution, industrial power systems, and renewable energy integration for all sectors.",
        "maintenance": "Our maintenance services include UPS maintenance contracts, preventive maintenance, emergency repairs, battery testing, and comprehensive AMC packages with 24/7 support.",
        
        // Industry-specific
        "data center": "We specialize in data center power infrastructure, precision cooling systems, UPS solutions, and monitoring systems to ensure 99.9% uptime for mission-critical operations.",
        "industrial": "Our industrial solutions include heavy-duty power systems, factory automation, industrial UPS systems, power distribution, and safety compliance for manufacturing facilities.",
        "home": "For homes and offices, we provide smart UPS systems, home automation, energy-efficient solutions, and reliable power backup to keep your devices protected.",
        
        // Emergency and support
        "emergency": "For emergency electrical support, call us immediately at +91 9035300045. We provide 24/7 emergency response services for critical power system failures.",
        "support": "We offer comprehensive technical support including 24/7 assistance, remote monitoring, on-site support, and extensive after-sales service. Call +91 9035300045 for immediate support.",
        "help": "I'm here to help! Whether you need information about our services, want a quote, need technical support, or have questions about power solutions, just let me know what you're looking for.",
        
        // Default response
        "default": "That's a great question! For detailed information about our electrical solutions and services, I'd recommend speaking with our expert team. Call us at +91 9035300045 or email sales@upflair.in. Our specialists can provide comprehensive answers tailored to your specific needs."
    };

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newMessage]);
        setInputMessage("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const lowercaseInput = inputMessage.toLowerCase();
            let response = botResponses.default;
            
            // Check for exact matches first
            if (botResponses[lowercaseInput]) {
                response = botResponses[lowercaseInput];
            } else {
                // Check for partial matches
                for (const [key, value] of Object.entries(botResponses)) {
                    if (lowercaseInput.includes(key) || key.includes(lowercaseInput)) {
                        response = value;
                        break;
                    }
                }
            }
            
            const botMessage = {
                id: messages.length + 2,
                text: response,
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);

            if (lowercaseInput.includes("contact") || lowercaseInput.includes("call") || lowercaseInput.includes("phone") || lowercaseInput.includes("email")) {
                setShowContactOptions(true);
            }
        }, 1500);
    };

    const handleQuickReply = (reply) => {
        const newMessage = {
            id: messages.length + 1,
            text: reply,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newMessage]);
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const lowercaseReply = reply.toLowerCase();
            let response = botResponses.default;
            
            // Check for exact matches first
            if (botResponses[lowercaseReply]) {
                response = botResponses[lowercaseReply];
            } else {
                // Check for partial matches
                for (const [key, value] of Object.entries(botResponses)) {
                    if (lowercaseReply.includes(key) || key.includes(lowercaseReply)) {
                        response = value;
                        break;
                    }
                }
            }
            
            const botMessage = {
                id: messages.length + 2,
                text: response,
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);

            if (lowercaseReply.includes("contact") || lowercaseReply.includes("call") || lowercaseReply.includes("phone") || lowercaseReply.includes("email")) {
                setShowContactOptions(true);
            }
        }, 1500);
    };

    const handleCall = () => {
        window.open("tel:+919035300045", "_self");
    };

    const handleEmail = () => {
        window.open("mailto:sales@upflair.in?subject=Inquiry from Website", "_self");
    };

    return (
        <>
            {/* Floating Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-[#0a1f55] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse"
                    >
                        <MessageCircle size={24} />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    </button>
                )}
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-80 h-150 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 animate-slideUp">
                    {/* Header */}
                    <div className="bg-[#0a1f55] text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot size={16} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Upflair Assistant</h3>
                                <p className="text-xs opacity-90">Online now</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-1 rounded-full transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl ${message.sender === "user"
                                            ? "bg-blue-600 text-white rounded-br-md"
                                            : "bg-white text-gray-800 rounded-bl-md shadow-sm border"
                                        }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start animate-fadeIn">
                                <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Quick Replies */}
                    <div className="p-3 border-t bg-white">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {quickReplies.map((reply, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuickReply(reply)}
                                    className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>

                        {/* Contact Buttons */}
                        <div className="flex gap-2 mb-3">
                            <button
                                onClick={handleCall}
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
                            >
                                <Phone size={14} />
                                Call Now
                            </button>
                            <button
                                onClick={handleEmail}
                                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
                            >
                                <Mail size={14} />
                                Email
                            </button>
                        </div>

                        {/* Input */}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder="Type your message..."
                                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default AnimatedChatbot;