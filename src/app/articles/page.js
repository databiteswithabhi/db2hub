'use client';

import React, { useState } from 'react';
import {
  Pagination,
  Tile,
  Grid,
  Column,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react'; // Import the arrow icon
import './_article-page.scss'; // Import scoped styles

// Sample Articles (6 Articles)
const sampleArticles = [
  {
    id: 1,
    title: 'Understanding Relational Databases',
    description:
      'Explore the key concepts and features of relational databases.',
    image:
      'https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/04/91/watson-banking-leadspace-medium.component.xl-retina.ts=1730483107792.png/content/adobe-cms/us/en/topics/linear-regression/jcr:content/root/leadspace',
    link: '/articles/understanding-relational-databases',
  },
  {
    id: 2,
    title: 'NoSQL vs SQL: A Comprehensive Comparison',
    description: 'Learn the differences between NoSQL and SQL databases.',
    image:
      'https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/9b/a1/content-hub-explainers-page-leadspace-short.component.xl-retina.ts=1700572774536.png/content/adobe-cms/us/en/topics/jcr:content/root/leadspace',
    link: '/articles/nosql-vs-sql',
  },
  {
    id: 3,
    title: 'Database Optimization Techniques',
    description:
      'Discover optimization strategies for faster database performance.',
    image:
      'https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/64/ea/content-hub-analytic-page-leadspace-short.component.xl-retina.ts=1723233042231.png/content/adobe-cms/us/en/topics/data-mining/jcr:content/root/leadspace',
    link: '/articles/database-optimization-techniques',
  },
  {
    id: 4,
    title: 'How to Use Indexing for Better Performance',
    description:
      'Understand how indexing can significantly improve query performance.',
    image:
      'https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/38/75/maas360-ai-analytics-aem-leadspace.component.xl-retina.ts=1730487152788.png/content/adobe-cms/us/en/topics/logistic-regression/jcr:content/root/leadspace',
    link: '/articles/how-to-use-indexing',
  },
  {
    id: 5,
    title: 'The Importance of Data Integrity',
    description:
      'Understand the significance of data integrity in database systems.',
    image:
      'https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/b3/ca/Maximo_predictive_maintenance1.component.xl-retina.ts=1725543550728.png/content/adobe-cms/us/en/topics/what-is-preventive-maintenance/jcr:content/root/leadspace',
    link: '/articles/data-integrity',
  },
  {
    id: 6,
    title: 'SQL Query Optimization',
    description:
      'Learn how to optimize your SQL queries for better performance.',
    image:
      'https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/38/75/maas360-ai-analytics-aem-leadspace.component.xl-retina.ts=1730487152788.png/content/adobe-cms/us/en/topics/logistic-regression/jcr:content/root/leadspace',
    link: '/articles/sql-query-optimization',
  },
];

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Pagination calculations
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sampleArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  return (
    <div className="blog-page">
      {/* Hero Image Section */}
      <div className="hero-image">
        <img
          src="https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/64/ea/content-hub-analytic-page-leadspace-short.component.xl-retina.ts=1724245916903.png/content/adobe-cms/us/en/topics/big-data-analytics/jcr:content/root/leadspace"
          alt="Hero"
          className="hero-img"
        />

        <div className="hero-text">
          <Breadcrumb>
            <BreadcrumbItem href="#">DB2Hub</BreadcrumbItem>
            <BreadcrumbItem href="#" isCurrentPage>
              Article
            </BreadcrumbItem>
          </Breadcrumb>
          <h1>The Data Journey Starts Here</h1>
          <p>Explore insightful articles and stories on Databases</p>
        </div>
      </div>

      {/* Main Content Section with Sidebar */}
      <Grid className="bx--grid blog-grid">
        {/* Sidebar */}
        <Column lg={3} md={4} sm={12}>
          {' '}
          {/* Sidebar Width Adjusted */}
          <div className="sidebar">
            <h4>Categories</h4>
            <ul>
              <li>Relational Databases</li>
              <li>NoSQL Databases</li>
              <li>Optimization</li>
              <li>Cloud Databases</li>
            </ul>
          </div>
        </Column>

        {/* Articles Section */}
        <Column lg={9} md={8} sm={12}>
          {' '}
          {/* Articles Width Adjusted */}
          <div className="blog-tiles">
            {currentArticles.map((article) => (
              <Tile className="blog-tile" key={article.id}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="blog-image"
                />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <Button
                  kind="primary"
                  href={article.link}
                  className="read-more-btn"
                >
                  Read More
                  <ArrowRight size={16} />
                </Button>
              </Tile>
            ))}
          </div>
        </Column>
      </Grid>

      {/* Pagination Section */}
      <Pagination
        pageSize={articlesPerPage}
        totalItems={sampleArticles.length}
        onChange={({ page }) => setCurrentPage(page)}
        pageSizes={[articlesPerPage]}
        page={currentPage}
      />
    </div>
  );
};

export default BlogPage;
