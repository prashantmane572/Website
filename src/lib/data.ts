import {
    BarChart,
    Database,
    Zap,
    ShoppingCart,
    Settings,
    Truck,
    BarChart3,
    Layout,
    Search,
    Clock,
    TrendingUp,
    ShieldCheck
} from "lucide-react";

export const projects = [
    {
        id: "1",
        title: "Inventory, Dispatch & Delivery Performance Analytics",
        summary: "Comprehensive dashboard for tracking inventory levels, dispatch efficiency, and OTD performance across multiple warehouses.",
        industry: "Supply Chain & Logistics",
        problem: "The client was struggling with manual tracking of inventory across 5 warehouses, leading to 12% stock discrepancies and frequent OTD (On-Time Delivery) delays.",
        dataSource: "SAP Business One (SQL Server), Excel Logs",
        tools: ["Power BI", "Advanced DAX", "SQL Server", "Power Query", "SAP HANA"],
        solution: "Developed a real-time consolidated dashboard that automated data extraction from SAP B1, implemented custom DAX measures for OTD tracking, and created an inventory aging model.",
        impact: [
            "15% Improvement in On-Time Delivery within 6 months.",
            "20% Reduction in manual reporting time for the operations team.",
            "Real-time visibility into stock-outs and overstock situations."
        ],
        metrics: [
            { label: "OTD Gain", value: "15%" },
            { label: "Reporting", value: "-20%" },
            { label: "Accuracy", value: "98%" }
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: "2",
        title: "Sales & Operations Analytics – Food Industry",
        summary: "Real-time sales performance tracking and demand forecasting model for a large-scale food manufacturing and distribution network.",
        industry: "Retail & FMCG",
        problem: "Fragmented sales data across different regions made it impossible to identify high-performing SKUs or predict seasonal demand shifts.",
        dataSource: "ERP Database, SQL Server",
        tools: ["Power BI", "Power Query", "Python", "Excel"],
        solution: "Built a centralized sales repository and dynamic Power BI dashboard that provided granular insights into regional sales, SKU velocity, and margin analysis.",
        impact: [
            "20% Efficiency gain in inventory turnover.",
            "12% Sales growth attributed to better demand forecasting.",
            "Consolidated multi-region data into a single source of truth."
        ],
        metrics: [
            { label: "Efficiency", value: "20%" },
            { label: "Growth", value: "12%" },
            { label: "Accuracy", value: "95%" }
        ],
        liveUrl: "#",
        githubUrl: "#"
    }
];

export const blogs = [
    {
        id: "1",
        title: "Power BI DAX Time Intelligence Guide",
        description: "Mastering complex time calculations in DAX to unlock deeper historical performance insights.",
        date: "March 1, 2026",
        author: "Prashant Mane",
        category: "Power BI Guide",
        readTime: "5 min read",
        content: "Full content here..."
    },
    {
        id: "2",
        title: "SAP HANA Query Optimization Techniques",
        description: "Practical strategies for reducing query latency and improving dashboard responsiveness in enterprise environments.",
        date: "Feb 24, 2026",
        author: "Prashant Mane",
        category: "SAP HANA",
        readTime: "7 min read",
        content: "Full content here..."
    },
    {
        id: "3",
        title: "Inventory Analytics Best Practices",
        description: "How to use BI tools to maintain optimal stock levels and reduce holding costs significantly.",
        date: "Feb 15, 2026",
        author: "Prashant Mane",
        category: "Inventory",
        readTime: "6 min read",
        content: "Full content here..."
    }
];

export const services = [
    {
        id: "1",
        title: "Custom Power BI Dashboards",
        description: "End-to-end dashboard development from requirement gathering to final deployment.",
        icon: BarChart,
        features: ["Advanced DAX", "Time Intelligence", "Interactive UI"]
    },
    {
        id: "2",
        title: "ERP Data Analytics",
        description: "Specialized analytics for SAP Business One and HANA systems.",
        icon: Settings,
        features: ["Finance", "Sales", "Inventory Integration"]
    },
    {
        id: "3",
        title: "SQL Optimization",
        description: "Fine-tuning database queries for maximum performance and reliability.",
        icon: Database,
        features: ["MS SQL Server", "SAP HANA", "Procedure Tuning"]
    },
    {
        id: "4",
        title: "Supply Chain Analytics",
        description: "Deep insights into OTD, backlog, and delivery performance metrics.",
        icon: Truck,
        features: ["OTD Tracking", "Route Optimization", "Vendor Scorecards"]
    },
    {
        id: "5",
        title: "Sales & Inventory Analytics",
        description: "Analyzing retail trends and optimizing stock turnover rates.",
        icon: ShoppingCart,
        features: ["Trend Analysis", "Demand Forecasting", "Safety Stock"]
    },
    {
        id: "6",
        title: "MIS Automation",
        description: "Automating repetitive reporting tasks to save hundreds of hours.",
        icon: Zap,
        features: ["Power Query", "Excel Automation", "Python Integration"]
    }
];

export const heroSkills = [
    { name: "Power BI", icon: Layout, category: "Business Intelligence", details: "Advanced DAX, Power Query" },
    { name: "SQL Server", icon: Database, category: "Databases", details: "Query Optimization" },
    { name: "SAP HANA", icon: Zap, category: "Analytics Focus", details: "Enterprise Data" },
    { name: "Python", icon: Search, category: "Tools", details: "Pandas, NumPy" }
];
