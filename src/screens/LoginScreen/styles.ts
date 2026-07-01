import { StyleSheet } from 'react-native';
import { AppColors, FontFamily, FontSizes, hp, wp } from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  card: {
    paddingHorizontal: wp(6),
    paddingVertical: wp(8),
    alignItems: 'center',
  },
  title: {
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_25,
    fontWeight: '700',
    color: AppColors.GRADIENT_BACKGROUND,
    paddingTop: hp(6),
    marginBottom: hp(6),
  },
  codeText: {
    color: AppColors.CODE_TEXT,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: '400',
  },
  textContainer: {
    backgroundColor: AppColors.COUNTRY_BACKGROUND,
    height: wp(15),
    width: wp(90),
    borderRadius: wp(2),
    borderWidth: 0.1,
  },
  box: {
    backgroundColor: AppColors.COUNTRY_BACKGROUND,
    paddingVertical: 0,
    borderRadius: wp(2),
    borderWidth: 0.1,
  },
  inputText: {
    color: AppColors.NUMBER_TEXT,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: '400',
  },
  rememberRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: hp(4),
  },
  checkbox: {
    width: wp(5),
    height: wp(5),
    borderWidth: wp(0.4),
    borderColor: AppColors.CHECKBOX_BORDER,
    borderRadius: 4,
    marginRight: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: AppColors.GRADIENT_BACKGROUND,
    borderColor: AppColors.GRADIENT_BACKGROUND,
  },
  tickIcon: {
    width: wp(4),
    height: wp(4),
    tintColor: AppColors.WHITE_TEXT,
  },
  rememberText: {
    color: AppColors.NUMBER_TEXT,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: '400',
  },
  signInBtn: {
    width: '100%',
    backgroundColor: AppColors.GRADIENT_BACKGROUND,
    alignItems: 'center',
    marginTop: hp(25),
    paddingVertical: wp(3),
    paddingHorizontal: wp(35),
    borderRadius: 30,
    marginLeft:wp(2.4),
    marginBottom: wp(3),
  },
  signInText: {
    fontFamily: FontFamily.Roboto_SemiBold,
    fontSize: FontSizes.FONT_SIZE_16,
    color: AppColors.WHITE_TEXT,
    fontWeight: 'bold',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(8),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: AppColors.LINE_COLOR,
  },
  orText: {
    paddingHorizontal: wp(4),
    color: AppColors.LINE_COLOR,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_11,
    fontWeight: '400',
  },
  socialRow: {
    flexDirection: 'row',
    gap: wp(8),
    marginBottom: wp(20),
    marginLeft:wp(19.3)
  },
  googleBox: {
    borderWidth: 1,
    borderColor: AppColors.LINE_COLOR,
    borderRadius: wp(6),
    padding: wp(1),
  },
  googleIcon: {
    width: wp(10),
    height: wp(10),
    resizeMode: 'contain',
  },
  facebookBox: {
    borderWidth: 1,
    borderColor: AppColors.LINE_COLOR,
    borderRadius: wp(6),
    padding: wp(1),
  },
  facebookIcon: {
    width: wp(10),
    height: wp(10),
    resizeMode: 'contain',
  },
  appleBox: {
    borderWidth: 1,
    borderColor: AppColors.LINE_COLOR,
    borderRadius: wp(6),
    padding: wp(0.2),
  },
  appleIcon: {
    width: wp(12),
    height: wp(12),
    resizeMode: 'contain',
  },
  footerText: {
    color: AppColors.NUMBER_TEXT,
    fontFamily: FontFamily.Roboto_SemiBold,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: '600',
  },
  registerText: {
    color: AppColors.GRADIENT_BACKGROUND,
    fontFamily: FontFamily.Roboto_SemiBold,
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: '600',
  },
});
