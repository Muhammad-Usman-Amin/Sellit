import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import Text from '../components/AppText/AppText';
import colors from '../config/colors'

export default function UploadScreen({ onDone, progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {/* <Text>{progress * 100}%</Text> */}
                {progress < 1 ?
                    (<Progress.Bar
                        color={colors.primary}
                        progress={progress}
                        width={200}
                    />)
                    :
                    (<LottieView
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        source={require('../assets/animations/done.json')}
                        style={styles.animation}
                    />)
                }

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    animation: {
        width: 500,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
})
