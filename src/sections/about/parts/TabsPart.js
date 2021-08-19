import React from 'react'
import styled, { keyframes } from 'styled-components'
import Progress from 'components/progress'
import Timeline from 'sections/about/parts/Timeline'

class TabsPart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'skills',
    }
  }

  render() {
    const TabContainer = styled.div`
      min-height: 400px;
      margin-top: 20px;
      @media (max-width: 767px) {
        margin-top: 50px;
        padding: 0 20px;
      }
    `
    const TabSelectors = styled.div`
      display: flex;
    `

    const ColorAnimation = keyframes`
            0%  {border-color: #04e5e5;}
            10% {border-color: #f37055;}
            20% {border-color: #ef4e7b;}
            30% {border-color: #a166ab;}
            40% {border-color: #5073b8;}
            50% {border-color: #04e5e5;}
            60% {border-color: #07b39b;}
            70% {border-color: #6fba82;}
            80% {border-color: #5073b8;}
            90% {border-color: #1098ad;}
            100% {border-color: #f37055;}
        `
    const TabSelector = styled.button`
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      background-color: transparent;
      border: none;
      margin: 0 10px 0 0;
      border-bottom: 2px solid #fff;
      transition: 0.5s;
      &:hover,
      &.active {
        animation: ${ColorAnimation} 10s infinite alternate;
      }
      &:focus {
        outline: none;
      }
      @media (max-width: 767px) {
        font-size: 18px;
      }
    `

    const Tabs = styled.div`
      margin-top: 20px;
    `

    const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

    const Tab = styled.div`
      display: none;
      animation: ${Fade} 1s forwards;
    `

    return (
      <TabContainer>
        <TabSelectors>
          <TabSelector
            className={this.state.tab === 'skills' ? 'active' : ''}
            onClick={() => this.setState({ tab: 'skills' })}
          >
            Skills
          </TabSelector>
          <TabSelector
            className={this.state.tab === 'experience' ? 'active' : ''}
            onClick={() => this.setState({ tab: 'experience' })}
          >
            Experience
          </TabSelector>
          <TabSelector
            className={this.state.tab === 'education' ? 'active' : ''}
            onClick={() => this.setState({ tab: 'education' })}
          >
            Education
          </TabSelector>
        </TabSelectors>
        <Tabs>
          <Tab
            style={{
              display: this.state.tab === 'skills' ? 'block' : 'none',
            }}
          >
            <Progress value={80} text='React' />
            <Progress value={95} text='Wordpress/ CMS' />
            <Progress value={90} text='HTML/CSS' />
            <Progress value={65} text='MongoDB' />
            <Progress value={75} text='NodeJS' />
          </Tab>
        </Tabs>
        <Tabs>
          <Tab
            style={{
              display: this.state.tab === 'experience' ? 'block' : 'none',
            }}
          >
            <Timeline
              data={{
                '2021 - Now': {
                  title: 'Junior MERN Developer',
                  institution: 'Nyx Wolves Private Limited',
                  description:
                    "Got hired as a core WordPress developer, later was promoted to MERN stack projects, Majorly in the Front End, and in Node/Express Backend. I'm now currently responsible in UI Designing, Front-end and Back-End Development. Technologies Used : HTML/CSS, Bootstrap, REACT, WordPress CMS, SQL, JavaScript, MongoDB, jQuery.",
                },
                '2018 - 2020': {
                  title: 'Freelance WordPress Developer',
                  institution: 'Self Employed',
                  description:
                    "These were my initial stage of getting in this field of Technologies. A stage where I taught myself few Programming Languages and WordPress specific PHP. Took up a few WordPress projects and developed them based on the Client's requirements. My primary focus during this stage was not to earn money but to learn a lot about career path!",
                },
              }}
            />
          </Tab>
          <Tab
            style={{
              display: this.state.tab === 'education' ? 'block' : 'none',
            }}
          >
            <Timeline
              data={{
                '2019 - 2022': {
                  title: 'Masters Of Computer Applications (MCA)',
                  institution:
                    'BS Abdur Rahman Crescent Institute of Science & Technology',
                  description:
                    "Currently pursuing my Masters in Computer Applications, mostly concentrating on the field of Web Technologies. MCA was a shift in my career since I loved Technologies, but I had a degree in Commerce which I wasn't happy about.",
                },
                '2015 - 2018': {
                  title: 'Bachelors of Commerce (B.COM)',
                  institution: 'A M Jain College',
                  description:
                    "Got my baccalaureates degree in Commerce, which I wasn't feeling right! But I had to finish it off since I was the one who started it! Later, moved to computer fields in the year 2019 when I applied for Masters in Computer Applications that I'm pursuing currently.",
                },
              }}
            />
          </Tab>
        </Tabs>
      </TabContainer>
    )
  }
}

export default TabsPart
