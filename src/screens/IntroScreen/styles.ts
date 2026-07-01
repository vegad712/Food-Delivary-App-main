import { Dimensions, StyleSheet } from 'react-native';
import { AppColors, FontFamily, FontSizes, hp, wp } from '../../utils';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: height * 0.35,
  },
  title: {
    fontFamily: FontFamily.Roboto_SemiBold,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: '600',
    color: AppColors.GRADIENT_BACKGROUND,
    marginTop: hp(20),
  },
  description: {
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_11,
    color: AppColors.GRADIENT_BACKGROUND,
    textAlign: 'center',
    marginTop: hp(1),
  },
  dotContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: wp(6),
  },
  dot: {
    height: wp(2),
    width: wp(2),
    backgroundColor: AppColors.GRADIENT_BACKGROUND,
    borderRadius: wp(2),
    marginHorizontal: wp(2),
  },
  bottomButtons: {
    alignItems: 'center',
    marginBottom: wp(15),
  },
  enjoyButton: {
    backgroundColor: AppColors.GRADIENT_BACKGROUND,
    paddingVertical: wp(3),
    paddingHorizontal: wp(29),
    borderRadius: 30,
    marginBottom: wp(2),
  },
  enjoyText: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_16,
  },
  loginButton: {
    paddingVertical: wp(2),
    paddingHorizontal: wp(29),
    borderRadius: 30,
    borderColor: AppColors.LOADER,
    borderWidth: 0.2,
  },
  loginText: {
    color: AppColors.GRADIENT_BACKGROUND,
    fontFamily: FontFamily.Roboto_SemiBold,
    fontSize: FontSizes.FONT_SIZE_11,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: AppColors.GRADIENT_BACKGROUND,
    paddingVertical: wp(3),
    paddingHorizontal: wp(40),
    borderRadius: 30,
    marginBottom: wp(5),
  },
  nextText: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto_SemiBold,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: '600',
  },
  skipText: {
    color: AppColors.LOADER,
    fontFamily: FontFamily.Roboto,
    fontWeight: '400',
    fontSize: FontSizes.FONT_SIZE_16,
  },
});
