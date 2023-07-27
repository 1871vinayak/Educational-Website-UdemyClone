import React from "react";
import styled from "styled-components";

const Banner = () => {
  const companies = [
    "Volkswagen",
    "Skillsoft",
    "Cisco",
    "AT&T",
    "Procter & Gamble",
    "Hewlett Packard Enterprise",
    "Citibank",
  ];

  return (
    <BannerWrapper>
      <p>
        Trusted by over 14,000 companies and millions of learners around the
        world
      </p>
      <ul>
        {companies.map((company) => (
          <li key={company}>
            <img
              src={`${company.toLowerCase().replace(/ /g, "-")}-logo.png`}
              alt={`${company} Logo`}
            />
          </li>
        ))}
      </ul>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  .banner {
    text-align: center;
    padding: 20px;
  }

  .banner p {
    margin-bottom: 20px;
  }

  .banner ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .banner li {
    margin: 0 10px;
  }

  .banner img {
    height: 40px;
  }
`;

export default Banner;
