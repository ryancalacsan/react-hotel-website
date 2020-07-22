import React, { Component } from 'react';
import {
  FaIdCard,
  FaMoneyCheckAlt,
  FaShuttleVan,
  FaUtensils,
} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaIdCard />,
        title: 'Enjoy More as a Member',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, culpa!',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Book your weekend getaway',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, culpa!',
      },
      {
        icon: <FaUtensils />,
        title: 'Dine Local',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, culpa!',
      },
      {
        icon: <FaMoneyCheckAlt />,
        title: 'The Best Rate Guaranteed',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, culpa!',
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Have it your way" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
