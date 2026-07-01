import { StyleSheet } from 'react-native';
import { AppColors, FontFamily, FontSizes, hp, wp } from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    borderColor: AppColors.WHITE_TEXT,
    borderRadius: wp(1),
  },
  imageBorder: {
    borderWidth: wp(2),
    borderColor: AppColors.WHITE_TEXT,
    borderRadius: wp(4), // optional (remove if you don't want rounded edges)
  },
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(80),
  },
  text1: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto_SemiBold,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: '600',
  },
  text2: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_25,
    fontWeight: '900',
    paddingTop: hp(1),
  },
});
