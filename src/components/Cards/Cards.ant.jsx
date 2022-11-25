import React from "react";
import { Card, Col, Row, Typography } from "antd";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";
const { Title, Text } = Typography;
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading";
  }
  return (
    <div className={styles.container}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Infected" className={cx(styles.card, styles.infected)}>
            <Title className={cx(styles.titleInfected)}>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Title>
            <p>
              <Text type="secondary">
                {new Date(lastUpdate).toDateString()}
              </Text>
            </p>
            <p>Number of active cases of COVID-19</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Recovered" className={cx(styles.card, styles.recovered)}>
            <Title className={cx(styles.titleRecovered)}>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Title>
            <p>
              <Text type="secondary">
                {new Date(lastUpdate).toDateString()}
              </Text>
            </p>
            <p>Number of recoveries from COVID-19</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Deaths" className={cx(styles.card, styles.deaths)}>
            <Title className={cx(styles.titleDeaths)}>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Title>
            <p>
              <Text type="secondary">
                {new Date(lastUpdate).toDateString()}
              </Text>
            </p>
            <p>Number of deaths caused by COVID-19</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
