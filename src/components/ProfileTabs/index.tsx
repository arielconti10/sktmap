import { TabView, SceneMap } from "react-native-tab-view";
import { Box, Center, View } from "native-base";
import { Animated, Pressable, useWindowDimensions } from "react-native";
import React from "react";

const FirstRoute = () => <Center flex={1}>This is Tab 1</Center>;

const SecondRoute = () => <Center flex={1}>This is Tab 2</Center>;

const ThirdRoute = () => <Center flex={1}>This is Tab 3</Center>;

const FourthRoute = () => <Center flex={1}>This is Tab 4 </Center>;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

export function ProfileTabs() {
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();

  const [routes] = React.useState([
    { key: "first", title: "Media" },
    { key: "second", title: "Spots" },
    { key: "third", title: "Checkins" },
  ]);

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map((x: any, i: any) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route: any, i: any) => {
          const color = index === i ? "#1f2937" : "#a1a1aa";
          const borderColor = index === i ? "cyan.500" : "coolGray.200";

          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <View style={{ width: layout.width, paddingHorizontal: 30, flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
      />
    </View>
  );
}
