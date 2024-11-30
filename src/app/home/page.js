`use client`;
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="https://cloud.ibm.com/catalog/services/db2">IBM DB2 on Cloud</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
        Data, Analytics, and Innovation: Welcome to DB2 Hub
        </h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Tab navigation">
            <Tab>About</Tab>
            <Tab>DB2 Resources</Tab>
            <Tab>Cloud & AI</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h3 className="landing-page__subheading">What is DB2 Hub?</h3>
                  <p className="landing-page__p">
                  DB2Hub is a portal providing the latest updates on IBM DB2, ETL pipelines, Watson, and cloud services like AWS, GCP, and Azure. Recognized by IBM Marketing between 2012-2016, DB2Hub is now returning with fresh insights on cloud, AI, and data.

Please note, DB2Hub is an independent resource and has no direct affiliation with IBM offerings. For broader tech insights, visit Data Bites.
                  </p>
                  <Button href='https://databites.dev/'>Data Bites</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src="/tab-illo.png"
                    alt="Carbon illustration"
                    width={604}
                    height={498}
                  />
                </Column>
                ;
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <p className="landing-page__p">
                  IBM® Db2® is a cloud-native database designed for low-latency transactions, real-time analytics, and AI applications. It ensures continuous availability and zero downtime during hybrid cloud migrations. With support for modern data types, workloads, and languages, it simplifies development. It also accelerates decision-making by enabling secure data sharing with open formats like Apache Iceberg. Additionally, it supports AI deployment at scale with built-in machine learning and IBM watsonx™ integration for generative AI.
                  </p>
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <p className="landing-page__p">
                  The Db2 Hub Portal offers a wealth of resources on cloud, AI, data science, and machine learning. It features tutorials, articles, and quizzes covering topics such as AWS, Google Cloud, Azure, and IBM watsonx for developing AI applications, managing data pipelines, and automating workflows. Users can access content on SQL, system design, and building chatbots with tools like IBM Watson Assistant. 

                  The portal also provides access to information on courses and certifications from leading providers, helping professionals stay informed about the latest trends and advancements in these rapidly evolving fields.
                  </p>
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid>
          <Column lg={4} md={2} sm={4}>
            <h3 className="landing-page__label">The Principles</h3>
          </Column>
          <Column
            lg={{ start: 5, span: 3 }}
            md={{ start: 3, span: 6 }}
            sm={4}
            className="landing-page__title"
          >
            Data Security and Integrity
          </Column>
          <Column
            lg={{ start: 9, span: 3 }}
            md={{ start: 3, span: 6 }}
            sm={4}
            className="landing-page__title"
          >
            Scalability and Performance
          </Column>
          <Column
            lg={{ start: 13, span: 3 }}
            md={{ start: 3, span: 6 }}
            sm={4}
            className="landing-page__title"
          >
            Cloud-Native and Hybrid Flexibility
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
}
