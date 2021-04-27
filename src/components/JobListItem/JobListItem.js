import React, { useState } from "react";
import Heart from "react-animated-heart";
import { JobListItemStyled, DateBox, CompanyLogoBox, PostContentSection, PostContent, CompanyInfoBox, HashTagBox } from "./JobListItem.styles";
import CompanyLogo from "../../images/nong.png";

const JobListItem = props => {
  const [isClick, setClick] = useState(false);
  const { data } = props;
  return (
    <JobListItemStyled isClosed={data.isClosed}>
      <DateBox>
        <span>D-10</span>
        <span>{data.dueDate}</span>
      </DateBox>
      <PostContentSection name="content-container">
        <CompanyLogoBox name="logo-container">
          <img src={CompanyLogo}></img>
        </CompanyLogoBox>
        <PostContent name="content">
          <span>{data.title}</span>
          <CompanyInfoBox>
            <a>농담곰 컴퍼니</a>
            <span>서울 강남구</span>
            <span>{data.tag}</span>
            <span>학력무관</span>
          </CompanyInfoBox>
          <HashTagBox>
            <a>#퍼블리싱</a>
            <a>{data.type}</a>
            <a>#채용시까지</a>
            <a>#경력 3년 이하</a>
          </HashTagBox>
        </PostContent>
        <Heart ismark={isClick ? 1 : 0} onClick={() => setClick(!isClick)} />
      </PostContentSection>
    </JobListItemStyled>
  );
};

JobListItem.propTypes = {};

export default JobListItem;
