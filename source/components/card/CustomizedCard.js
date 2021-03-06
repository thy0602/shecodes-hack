import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { Block, Text, Icon } from "galio-framework";
import PropTypes from 'prop-types';

const { width } = Dimensions.get("screen");

const FONT_SIZE = 15;
const BASE = 16;

function CustomizedCard({
  imageSrc,
  product,
  avatarSrc,
  title,
  price,
  location
}) {

  const renderImage = () => {
    if (!imageSrc)
      return null;
    return (
      <Block flex={0.7} style={styles.imageBlock}>
        <Image
          source={imageSrc}
          style={styles.image}/>
      </Block>
    );
  };

  function renderProduct() {
    return (
      <Block flex style={styles.product}>
        <Text size={FONT_SIZE * 0.875} style={{marginTop: 5}}>{product}</Text>
      </Block>
    );
  }

  function renderAvatar() {
    if (!avatarSrc)
      return null;
    return (
      <Image
        source={avatarSrc}
        style={styles.avatar}/>
    );
  }

  function renderLocation() {
    if (!location) return null;
    return (
      <Block row right>
        <Icon
          name="map-pin"
          family="feather"
          color={"gray"}
          size={FONT_SIZE}/>
        <Text
          muted
          size={FONT_SIZE * 0.875}
          color={"gray"}
          style={{ marginLeft: 16 * 0.25 }}>
          {location}
        </Text>
      </Block>
    );
  }

  const renderDescription = () => {
    return (
      <Block flex={0.3} style={styles.footer}>
        {renderProduct()}
        <Block flex row space="between">
          <Block flex={0.3}>{renderAvatar()}</Block>
          <Block flex={1.7}>
            <Block style={styles.title}>
              <Text
                size={FONT_SIZE * 0.875}>
                {" "} {title}
              </Text>
            </Block>
            <Block row space="between">
              <Block row right>
                <Text
                  p
                  muted
                  size={FONT_SIZE * 0.875}>
                  {" "} {price}
                </Text>
              </Block>
              {renderLocation()}
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };
  return (
    <Block flex style={styles.card}>
      {renderImage()}
      {renderDescription()}
    </Block>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    alignSelf: "center",
  },
  image: {
    width: "auto",
    height: 20 * 12.5,
    borderRadius: 10,
  },
  imageBlock: {
    borderWidth: 0,
    overflow: "hidden",
  },
  avatar: {
    width: BASE * 2.5,
    height: BASE * 2.5,
    borderRadius: BASE * 1.25,
  },
  footer: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: BASE * 0.75,
    paddingBottom: BASE * 0.75,
    backgroundColor: "transparent",
    zIndex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 1,
  },
  title: {
    justifyContent: "center",
  },
  product: {
    justifyContent: "center",
  },
});

CustomizedCard.propTypes = {
  imageSrc: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  product: PropTypes.string,
  avatarSrc: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  title: PropTypes.string,
  caption: PropTypes.string,
  location: PropTypes.string,
};

export default CustomizedCard;
