import { UPDATE_SIGNUP_INFO } from "../constants/actionTypes";

const initialState = {
  nationalId: "",
  userType: 1,
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  transId: "",
  random: "",
  dateOfBirthHijry: "",
  dateOfBirth: "",
  gender: "",
  brokerageContractNumber: "",
  brokerageContractExpireDate: "",
  registerationNumber: "",
  companyName: "",
  acceptTOS: false,
  isLoading: false,
  showAlert: false,
  alertMessage: "",
  nafathChecked: false,
  buyerFormErrors: {
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
  },
  brokerFormErrors: {
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    brokerageContractNumber: "",
    brokerageContractExpireDate: "",
  },
  ownerFormErrors: {
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    brokerageContractNumber: "",
    brokerageContractExpireDate: "",
  },
  realEstateFormErrors: {
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    brokerageContractNumber: "",
    brokerageContractExpireDate: "",
    registerationNumber: "",
    companyName: "",
  },
  nafathCheckErrors: {
    nationalId: " ",
    userType: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIGNUP_INFO:
      return {
        ...state,
        nationalId:
          action.payload.nationalId || action.payload.nationalId === ""
            ? action.payload.nationalId
            : state.nationalId,
        userType: action.payload.userType
          ? action.payload.userType
          : state.userType,
        name:
          action.payload.name || action.payload.name === ""
            ? action.payload.name
            : state.name,
        alertMessage: action.payload.alertMessage
          ? action.payload.alertMessage
          : state.alertMessage,
        nafathChecked:
          action.payload.nafathChecked !== undefined &&
          action.payload.nafathChecked !== null
            ? action.payload.nafathChecked
            : state.nafathChecked,
        showAlert: action.payload.showAlert,
        isLoading:
          action.payload.isLoading !== undefined
            ? action.payload.isLoading
            : state.isLoading,
        email:
          action.payload.email || action.payload.email === ""
            ? action.payload.email
            : state.email,
        password:
          action.payload.password || action.payload.password === ""
            ? action.payload.password
            : state.password,
        confirmPassword:
          action.payload.confirmPassword ||
          action.payload.confirmPassword === ""
            ? action.payload.confirmPassword
            : state.confirmPassword,
        phoneNumber:
          action.payload.phoneNumber || action.payload.phoneNumber === ""
            ? action.payload.phoneNumber
            : state.phoneNumber,
        transId:
          action.payload.transId || action.payload.transId === ""
            ? action.payload.transId
            : state.transId,
        random:
          action.payload.random || action.payload.random === ""
            ? action.payload.random
            : state.random,
        dateOfBirthHijry:
          action.payload.dateOfBirthHijry ||
          action.payload.dateOfBirthHijry === ""
            ? action.payload.dateOfBirthHijry
            : state.dateOfBirthHijry,
        dateOfBirth:
          action.payload.dateOfBirth || action.payload.dateOfBirth === ""
            ? action.payload.dateOfBirth
            : state.dateOfBirth,
        gender:
          action.payload.gender || action.payload.gender === ""
            ? action.payload.gender
            : state.gender,
        brokerageContractNumber:
          action.payload.brokerageContractNumber ||
          action.payload.brokerageContractNumber === ""
            ? action.payload.brokerageContractNumber
            : state.brokerageContractNumber,
        brokerageContractExpireDate:
          action.payload.brokerageContractExpireDate ||
          action.payload.brokerageContractExpireDate === ""
            ? action.payload.brokerageContractExpireDate
            : state.brokerageContractExpireDate,
        registerationNumber:
          action.payload.registerationNumber ||
          action.payload.registerationNumber === ""
            ? action.payload.registerationNumber
            : state.registerationNumber,
        companyName:
          action.payload.companyName || action.payload.companyName === ""
            ? action.payload.companyName
            : state.companyName,
        acceptTOS:
          action.payload.acceptTOS !== undefined &&
          action.payload.acceptTOS !== null
            ? action.payload.acceptTOS
            : state.acceptTOS,
        buyerFormErrors: {
          email:
            action.payload.buyerFormErrors &&
            action.payload.buyerFormErrors.email
              ? action.payload.buyerFormErrors.email
              : state.buyerFormErrors.email,
          password:
            action.payload.buyerFormErrors &&
            action.payload.buyerFormErrors.password
              ? action.payload.buyerFormErrors.password
              : state.buyerFormErrors.password,
          confirmPassword:
            action.payload.buyerFormErrors &&
            action.payload.buyerFormErrors.confirmPassword
              ? action.payload.buyerFormErrors.confirmPassword
              : state.buyerFormErrors.confirmPassword,
          phoneNumber:
            action.payload.buyerFormErrors &&
            action.payload.buyerFormErrors.phoneNumber
              ? action.payload.buyerFormErrors.phoneNumber
              : state.buyerFormErrors.phoneNumber,
          gender:
            action.payload.buyerFormErrors &&
            action.payload.buyerFormErrors.gender
              ? action.payload.buyerFormErrors.gender
              : state.buyerFormErrors.gender,
        },
        brokerFormErrors: {
          email:
            action.payload.brokerFormErrors &&
            action.payload.brokerFormErrors.email
              ? action.payload.brokerFormErrors.email
              : state.brokerFormErrors.email,
          password:
            action.payload.brokerFormErrors &&
            action.payload.brokerFormErrors.password
              ? action.payload.brokerFormErrors.password
              : state.brokerFormErrors.password,
          confirmPassword:
            action.payload.brokerFormErrors &&
            action.payload.brokerFormErrors.confirmPassword
              ? action.payload.brokerFormErrors.confirmPassword
              : state.brokerFormErrors.confirmPassword,
          phoneNumber:
            action.payload.brokerFormErrors &&
            action.payload.brokerFormErrors.phoneNumber
              ? action.payload.brokerFormErrors.phoneNumber
              : state.brokerFormErrors.phoneNumber,
          gender:
            action.payload.brokerFormErrors &&
            action.payload.brokerFormErrors.gender
              ? action.payload.brokerFormErrors.gender
              : state.brokerFormErrors.gender,
          brokerageContractNumber:
            action.payload.brokerFormErrors &&
            action.payload.brokerFormErrors.brokerageContractNumber
              ? action.payload.brokerFormErrors.brokerageContractNumber
              : state.brokerFormErrors.brokerageContractNumber,
          brokerageContractExpireDate:
            action.payload.brokerFormErrors &&
            action.payload.brokerFormErrors.brokerageContractExpireDate
              ? action.payload.brokerFormErrors.brokerageContractExpireDate
              : state.brokerFormErrors.brokerageContractExpireDate,
        },
        ownerFormErrors: {
          email:
            action.payload.ownerFormErrors &&
            action.payload.ownerFormErrors.email
              ? action.payload.ownerFormErrors.email
              : state.ownerFormErrors.email,
          password:
            action.payload.ownerFormErrors &&
            action.payload.ownerFormErrors.password
              ? action.payload.ownerFormErrors.password
              : state.ownerFormErrors.password,
          confirmPassword:
            action.payload.ownerFormErrors &&
            action.payload.ownerFormErrors.confirmPassword
              ? action.payload.ownerFormErrors.confirmPassword
              : state.ownerFormErrors.confirmPassword,
          phoneNumber:
            action.payload.ownerFormErrors &&
            action.payload.ownerFormErrors.phoneNumber
              ? action.payload.ownerFormErrors.phoneNumber
              : state.ownerFormErrors.phoneNumber,
          gender:
            action.payload.ownerFormErrors &&
            action.payload.ownerFormErrors.gender
              ? action.payload.ownerFormErrors.gender
              : state.ownerFormErrors.gender,
          brokerageContractNumber:
            action.payload.ownerFormErrors &&
            action.payload.ownerFormErrors.brokerageContractNumber
              ? action.payload.ownerFormErrors.brokerageContractNumber
              : state.ownerFormErrors.brokerageContractNumber,
          brokerageContractExpireDate:
            action.payload.ownerFormErrors &&
            action.payload.ownerFormErrors.brokerageContractExpireDate
              ? action.payload.ownerFormErrors.brokerageContractExpireDate
              : state.ownerFormErrors.brokerageContractExpireDate,
        },
        realEstateFormErrors: {
          email:
            action.payload.realEstateFormErrors &&
            action.payload.realEstateFormErrors.email
              ? action.payload.realEstateFormErrors.email
              : state.realEstateFormErrors.email,
          password:
            action.payload.realEstateFormErrors &&
            action.payload.realEstateFormErrors.password
              ? action.payload.realEstateFormErrors.password
              : state.realEstateFormErrors.password,
          confirmPassword:
            action.payload.realEstateFormErrors &&
            action.payload.realEstateFormErrors.confirmPassword
              ? action.payload.realEstateFormErrors.confirmPassword
              : state.realEstateFormErrors.confirmPassword,
          phoneNumber:
            action.payload.realEstateFormErrors &&
            action.payload.realEstateFormErrors.phoneNumber
              ? action.payload.realEstateFormErrors.phoneNumber
              : state.realEstateFormErrors.phoneNumber,
          gender:
            action.payload.realEstateFormErrors &&
            action.payload.realEstateFormErrors.gender
              ? action.payload.realEstateFormErrors.gender
              : state.realEstateFormErrors.gender,
          brokerageContractNumber:
            action.payload.realEstateFormErrors &&
            action.payload.realEstateFormErrors.brokerageContractNumber
              ? action.payload.realEstateFormErrors.brokerageContractNumber
              : state.realEstateFormErrors.brokerageContractNumber,
          brokerageContractExpireDate:
            action.payload.realEstateFormErrors &&
            action.payload.realEstateFormErrors.brokerageContractExpireDate
              ? action.payload.realEstateFormErrors.brokerageContractExpireDate
              : state.realEstateFormErrors.brokerageContractExpireDate,
          registerationNumber:
            action.payload.realEstateFormErrors &&
            action.payload.realEstateFormErrors.registerationNumber
              ? action.payload.realEstateFormErrors.registerationNumber
              : state.realEstateFormErrors.registerationNumber,
          companyName:
            action.payload.realEstateFormErrors &&
            action.payload.realEstateFormErrors.companyName
              ? action.payload.realEstateFormErrors.companyName
              : state.realEstateFormErrors.companyName,
        },
        nafathCheckErrors: {
          nationalId:
            action.payload.nafathCheckErrors &&
            action.payload.nafathCheckErrors.nationalId
              ? action.payload.nafathCheckErrors.nationalId
              : state.nafathCheckErrors.nationalId,
          userType:
            action.payload.nafathCheckErrors &&
            action.payload.nafathCheckErrors.userType
              ? action.payload.nafathCheckErrors.userType
              : state.nafathCheckErrors.userType,
        },
      };
    default:
      return state;
  }
};
