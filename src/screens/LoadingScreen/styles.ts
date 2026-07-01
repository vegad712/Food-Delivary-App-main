import { StyleSheet } from 'react-native';
import { AppColors, FontFamily, FontSizes, hp, wp } from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: AppColors.GRADIENT_BACKGROUND,
    borderColor: AppColors.WHITE_TEXT,
    borderRadius: wp(3.5),
    borderWidth: wp(1.5),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: wp(30),
    width: wp(55),
    marginTop: hp(15),
  },
  headerText: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_20,
    fontWeight: '900',
    paddingTop: hp(5),
  },
  mediumText: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto_SemiBold,
    fontSize: FontSizes.FONT_SIZE_10,
    fontWeight: '600',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText1: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_11,
    fontWeight: '600',
    paddingTop: hp(45),
  },
  bottomText2: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_11,
    fontWeight: '600',
  },
  loader: {
    width: wp(60),
    height: hp(0.5),
    borderWidth: 1,
    borderColor: AppColors.WHITE_TEXT,
    marginTop: wp(5),
    overflow: 'hidden', // important for smooth fill effect
    backgroundColor: AppColors.WHITE_TEXT,
    borderRadius: wp(2),
  },
  loaderFill: {
    height: '100%',
    backgroundColor: AppColors.LOADER,
    borderRadius: wp(2),
  },
});
