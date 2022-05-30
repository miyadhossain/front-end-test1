import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "../../styles/Tabs.css";
import AppContainer from "../utilis/AppContainer";
import AppDividerTitle from "../utilis/AppDividerTitle";
import TabBoxContainer from "../utilis/TabBoxContainer";
import TabTextContainer from "../utilis/TabTextContainer";

const VersatitleAddComponent = () => {
  return (
    <div className="my-10 min-h-[500px]">
      <AppDividerTitle title="VERSATILE AD FORMATS" />
      <AppContainer>
        <div>
          <Tabs>
            <TabList>
              <Tab>POP-UNDER</Tab>
              <Tab>BANNER AD</Tab>
              <Tab>NATIVE</Tab>
              <Tab>SKIM</Tab>
            </TabList>

            <TabPanel>
              <AppContainer>
                <div className="flex space-x-20 my-14">
                  {/* box area */}
                  <TabBoxContainer
                    title1="Ad Format"
                    title2="Explanation graphics of ad format"
                    title3="(Image will be changed)"
                  />
                  {/* text area */}
                  <TabTextContainer
                    title="POP-UNDER"
                    text="This is one of the most popular ads. After user’s click, this ad opens landing page in behind. So, the user experience is not hampered much."
                  />
                </div>
              </AppContainer>
            </TabPanel>
            <TabPanel>
              <AppContainer>
                <div className="flex space-x-20 my-14">
                  {/* box area */}
                  <TabBoxContainer
                    title1="Ad Format"
                    title2="Explanation graphics of ad format"
                    title3="(Image will be changed)"
                  />
                  {/* text area */}
                  <TabTextContainer
                    title="BANNER AD"
                    text="Choose between the available banner formats. Highly
                    effective ad for visibility."
                  />
                </div>
              </AppContainer>
            </TabPanel>
            <TabPanel>
              <AppContainer>
                <div className="flex space-x-20 my-14">
                  {/* box area */}
                  <TabBoxContainer
                    title1="Ad Format"
                    title2="Explanation graphics of ad format"
                    title3="(Image will be changed)"
                  />
                  {/* text area */}
                  <TabTextContainer
                    title="NATIVE"
                    text="Ad format with the image and the title, that perfectly fits into
                    the content of the site.
                    Native ads are placed in the most visible areas of the page
                    and, thus, this format shows good results and the level of
                    interaction."
                  />
                </div>
              </AppContainer>
            </TabPanel>
            <TabPanel>
              <AppContainer>
                <div className="flex space-x-20 my-14">
                  {/* box area */}
                  <TabBoxContainer
                    title1="Ad Format"
                    title2="Explanation graphics of ad format"
                    title3="(Image will be changed)"
                  />
                  {/* text area */}
                  <TabTextContainer
                    title="SKIM"
                    text='SKIM" is a link that a publisher inserts on a specific site
                    element, and after clicking on it, an advertisement appears
                    to the user.
                    SKIM gives 100% control of your sold traffic amount, higher
                    CR to advertisers and CPM rates to publishers.'
                  />
                </div>
              </AppContainer>
            </TabPanel>
          </Tabs>
        </div>
      </AppContainer>
    </div>
  );
};

export default VersatitleAddComponent;
