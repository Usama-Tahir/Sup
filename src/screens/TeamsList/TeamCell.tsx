import React, {PureComponent} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import px from '../../utils/normalizePixel';
import {Team} from '../../models';
import Touchable from '../../components/Touchable';

type Props = {
  team: Team;
  onPress(team: Team): void;
  selected?: boolean;
};

class TeamCell extends PureComponent<Props> {
  renderName() {
    let {team} = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.name}>{team.name}</Text>
      </View>
    );
  }

  renderLogo() {
    let {team} = this.props;
    return <FastImage source={{uri: team && team.icon.image_68}} style={styles.teamLogo} />;
  }

  renderSelectMark() {
    let {selected} = this.props;
    return <View style={[styles.selectMark, !selected && {backgroundColor: 'transparent'}]}></View>;
  }

  render() {
    let {onPress, team} = this.props;
    return (
      <Touchable style={styles.container} key={team.id} onPress={() => onPress && onPress(team)}>
        {this.renderSelectMark()}
        {this.renderLogo()}
        {this.renderName()}
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: px(50),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: px(12),
  },
  selectMark: {
    width: px(5),
    height: '95%',
    borderTopRightRadius: px(10),
    borderBottomRightRadius: px(10),
    backgroundColor: '#fff',
  },
  teamLogo: {
    width: px(50),
    height: px(50),
    borderRadius: px(13),
    marginLeft: px(8),
  },
  name: {
    marginLeft: px(8),
    color: '#fff',
    fontWeight: '700',
  },
});

export default TeamCell;
