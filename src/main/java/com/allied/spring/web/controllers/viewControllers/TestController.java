package com.allied.spring.web.controllers.viewControllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class TestController {

    /*
     * @GetMapping public String indexPage() {
     * System.out.println("hitting test controller to page"); return
     * "website/index"; }
     */

    @GetMapping(value = {"/", "/test"})
    public String test() {
        return "website/test";
    }


    @GetMapping(value = {"/", "/test2"})
    public String test2() {
        return "website/test2";
    }


    @GetMapping(value = {"/", "/AdminIndexPage"})
    public String AdminIndexPage() {
        return "website/AdminIndexPage";
    }

    @GetMapping(value = {"/", "/UserManagement"})
    public String UserManagement() {
        return "website/UserManagement";
    }

    @GetMapping(value = {"/", "/EditUser"})
    public String EditUser() {
        return "website/EditUser";
    }


    @GetMapping(value = {"/", "/sideMenu"})
    public String sideMenu() {
        return "website/sideMenu";
    }

    @GetMapping(value = {"/", "/FormForNewAPI"})
    public String FormForNewAPI() {
        return "website/FormForNewAPI";
    }


    @GetMapping(value = {"/", "/form1"})
    public String form1() {
        return "website/form1";
    }

    @GetMapping(value = {"/", "/Introduction"})
    public String Introduction(Model model) {
        return "website/Introduction";
    }

    @GetMapping(value = {"/", "/BuildingBlocks"})
    public String BuildingBlocks() {
        return "website/BuildingBlocks";
    }

    @GetMapping(value = {"/", "/Security"})
    public String Security() {
        return "website/Security";
    }

    @GetMapping(value = {"/", "/LoansAndCards"})
    public String LoansAndCards() {
        return "website/LoansAndCards";
    }

    @GetMapping(value = {"/", "/Payments"})
    public String Payments() {
        return "website/Payments";
    }

    @GetMapping(value = {"/", "/AccountsAndDeposits"})
    public String AccountsAndDeposits() {
        return "website/AccountsAndDeposits";
    }

    @GetMapping(value = {"/", "/BusinessBanking"})
    public String BusinessBanking() {
        return "website/BusinessBanking";
    }

    @GetMapping(value = {"/", "/TradeServices"})
    public String TradeServices() {
        return "website/TradeServices";
    }

    @GetMapping(value = {"/", "/CorporateAPISuite"})
    public String CorporateAPISuite() {
        return "website/CorporateAPISuite";
    }

    @GetMapping(value = {"/", "/SecurityEncryption"})
    public String SecurityEncryption(Model model) {
        return "website/SecurityEncryption";
    }

    @GetMapping(value = {"/", "/SecurityTestAPI"})
    public String SecurityTestAPI() {
        return "website/SecurityTestAPI";
    }

    @GetMapping(value = {"/", "/SecurityDecryption"})
    public String SecurityDecryption() {
        return "website/SecurityDecryption";
    }

    @GetMapping(value = {"/", "/BBPreApprovedOffers"})
    public String BBPreApprovedOffers() {
        return "website/BBPreApprovedOffers";
    }

    @GetMapping(value = {"/", "/BBPassport"})
    public String BBPassport() {
        return "website/BBPassport";
    }

    @GetMapping(value = {"/", "/BBVKYC"})
    public String BBVKYC() {
        return "website/BBVKYC";
    }

    @GetMapping(value = {"/", "/BBUnifiedCustomerJourney"})
    public String BBUnifiedCustomerJourney() {
        return "website/BBUnifiedCustomerJourney";
    }

    @GetMapping(value = {"/", "/BBCustomerAuthentication"})
    public String BBCustomerAuthentication() {
        return "website/BBCustomerAuthentication";
    }

    @GetMapping(value = {"/", "/BBAccountAggregator"})
    public String BBAccountAggregator() {
        return "website/BBAccountAggregator";
    }

    @GetMapping(value = {"/", "/BBAadharVault"})
    public String BBAadharVault() {
        return "website/BBAadharVault";
    }

    @GetMapping(value = {"/", "/BBPerfios"})
    public String BBPerfios() {
        return "website/BBPerfios";
    }

    @GetMapping(value = {"/", "/BBTokenization"})
    public String BBTokenization() {
        return "website/BBTokenization";
    }

    @GetMapping(value = {"/", "/BBNewCustomerOnboarding"})
    public String BBNewCustomerOnboarding() {
        return "website/BBNewCustomerOnboarding";
    }

    @GetMapping(value = {"/", "/BBBureauCheck"})
    public String BBBureauCheck() {
        return "website/BBBureauCheck";
    }

    @GetMapping(value = {"/", "/BBPANValidation"})
    public String BBPANValidation() {
        return "website/BBPANValidation";
    }

    @GetMapping(value = {"/", "/BBEligibilityCheck"})
    public String BBEligibilityCheck() {
        return "website/BBEligibilityCheck";
    }

    @GetMapping(value = {"/", "/BBDocumentUpload"})
    public String BBDocumentUpload() {
        return "website/BBDocumentUpload";
    }

    @GetMapping(value = {"/", "/BBMobileRecharge"})
    public String BBMobileRecharge() {
        return "website/BBMobileRecharge";
    }

    @GetMapping(value = {"/", "/BBGST"})
    public String BBGST() {
        return "website/BBGST";
    }

    @GetMapping(value = {"/", "/LCLoans"})
    public String LCLoans() {
        return "website/LCLoans";
    }

    @GetMapping(value = {"/", "/AutoLoans"})
    public String AutoLoans() {
        return "website/AutoLoans";
    }

    @GetMapping(value = {"/", "/PersonalLoanV1"})
    public String PersonalLoanV1() {
        return "website/PersonalLoanV1";
    }

    @GetMapping(value = {"/", "/PersonalLoanV2"})
    public String PersonalLoanV2() {
        return "website/PersonalLoanV2";
    }

    @GetMapping(value = {"/", "/Topup"})
    public String Topup() {
        return "website/Topup";
    }

    @GetMapping(value = {"/", "/LoanManagement"})
    public String LoanManagement() {
        return "website/LoanManagement";
    }

    @GetMapping(value = {"/", "/MortgageLoan"})
    public String MortgageLoan() {
        return "website/MortgageLoan";
    }

    @GetMapping(value = {"/", "/NationalPortal_EducationLoan_PDP"})
    public String NationalPortal_EducationLoan_PDP() {
        return "website/NationalPortal_EducationLoan_PDP";
    }

    @GetMapping(value = {"/", "/LCCards"})
    public String LCCards() {
        return "website/LCCards";
    }

    @GetMapping(value = {"/", "/CreditCards"})
    public String CreditCards() {
        return "website/CreditCards";
    }

    @GetMapping(value = {"/", "/PrepaidCard"})
    public String PrepaidCard() {
        return "website/PrepaidCard";
    }

    @GetMapping(value = {"/", "/Pockets"})
    public String Pockets() {
        return "website/Pockets";
    }

    @GetMapping(value = {"/", "/DebitCards"})
    public String DebitCards() {
        return "website/DebitCards";
    }

    @GetMapping(value = {"/", "/Paylater"})
    public String Paylater() {
        return "website/Paylater";
    }

    @GetMapping(value = {"/", "/CardlessEMI"})
    public String CardlessEMI() {
        return "website/CardlessEMI";
    }

    @GetMapping(value = {"/", "/UPI1"})
    public String UPI1() {
        return "website/UPI1";
    }

    @GetMapping(value = {"/", "/ALOTPCreation"})
    public String ALOTPCreation() {
        return "website/ALOTPCreation";
    }

    @GetMapping(value = {"/", "/ALGetOffer"})
    public String ALGetOffer() {
        return "website/ALGetOffer";
    }

    @GetMapping(value = {"/", "/ALEligibilityCheck"})
    public String ALEligibilityCheck() {
        return "website/ALEligibilityCheck";
    }

    @GetMapping(value = {"/", "/ALSanctionLetter"})
    public String ALSanctionLetter() {
        return "website/ALSanctionLetter";
    }

    @GetMapping(value = {"/", "/ALBankStatementUpload"})
    public String ALBankStatementUpload() {
        return "website/ALBankStatementUpload";
    }

    @GetMapping(value = {"/", "/ALDocumentUpload"})
    public String ALDocumentUpload() {
        return "website/ALDocumentUpload";
    }

    @GetMapping(value = {"/", "/PersonalLoanV1GenerateOTP"})
    public String PersonalLoanV1GenerateOTP() {
        return "website/PersonalLoanV1GenerateOTP";
    }

    @GetMapping(value = {"/", "/PersonalLoanV1GetOffer"})
    public String PersonalLoanV1GetOffer() {
        return "website/PersonalLoanV1GetOffer";
    }

    @GetMapping(value = {"/", "/PersonalLoanV1OfferValidation"})
    public String PersonalLoanV1OfferValidation() {
        return "website/PersonalLoanV1OfferValidation";
    }

    @GetMapping(value = {"/", "/PersonalLoanV1OfferConfirmation"})
    public String PersonalLoanV1OfferConfirmation() {
        return "website/PersonalLoanV1OfferConfirmation";
    }

    @GetMapping(value = {"/", "/PersonalLoanV2OTPCreation"})
    public String PersonalLoanV2OTPCreation() {
        return "website/PersonalLoanV2OTPCreation";
    }

    @GetMapping(value = {"/", "/PersonalLoanV2GetOffer"})
    public String PersonalLoanV2GetOffer() {
        return "website/PersonalLoanV2GetOffer";
    }

    @GetMapping(value = {"/", "/PersonalLoanV2EligibilityCheck"})
    public String PersonalLoanV2EligibilityCheck() {
        return "website/PersonalLoanV2EligibilityCheck";
    }

    @GetMapping(value = {"/", "/PersonalLoanV2BankStatementUpload"})
    public String PersonalLoanV2BankStatementUpload() {
        return "website/PersonalLoanV2BankStatementUpload";
    }

    @GetMapping(value = {"/", "/PersonalLoanV2DocumentUpload"})
    public String PersonalLoanV2DocumentUpload() {
        return "website/PersonalLoanV2DocumentUpload";
    }

    @GetMapping(value = {"/", "/PersonalLoanV2LoanDisbursement"})
    public String PersonalLoanV2LoanDisbursement() {
        return "website/PersonalLoanV2LoanDisbursement";
    }

    @GetMapping(value = {"/", "/PersonalLoanV2FI_Interest_Fetch"})
    public String PersonalLoanV2FI_Interest_Fetch() {
        return "website/PersonalLoanV2FI_Interest_Fetch";
    }

    @GetMapping(value = {"/", "/TopupFetchOffer"})
    public String TopupFetchOffer() {
        return "website/TopupFetchOffer";
    }

    @GetMapping(value = {"/", "/TopupGenerateAgreementLetter"})
    public String TopupGenerateAgreementLetter() {
        return "website/TopupGenerateAgreementLetter";
    }

    @GetMapping(value = {"/", "/TopupLoanDisbursement"})
    public String TopupLoanDisbursement() {
        return "website/TopupLoanDisbursement";
    }

    @GetMapping(value = {"/", "/LMGetLoanAccountDetails"})
    public String LMGetLoanAccountDetails() {
        return "website/LMGetLoanAccountDetails";
    }

    @GetMapping(value = {"/", "/LMLoanDetails"})
    public String LMLoanDetails() {
        return "website/LMLoanDetails";
    }

    @GetMapping(value = {"/", "/LMRestructuring_NLI"})
    public String LMRestructuring_NLI() {
        return "website/LMRestructuring_NLI";
    }

    @GetMapping(value = {"/", "/LMRepaymentDetails"})
    public String LMRepaymentDetails() {
        return "website/LMRepaymentDetails";
    }

    @GetMapping(value = {"/", "/LMProfileInformation"})
    public String LMProfileInformation() {
        return "website/LMProfileInformation";
    }

    @GetMapping(value = {"/", "/LMDisbursementDetails"})
    public String LMDisbursementDetails() {
        return "website/LMDisbursementDetails";
    }

    @GetMapping(value = {"/", "/LMLoanCredentialVerificationCheck"})
    public String LMLoanCredentialVerificationCheck() {
        return "website/LMLoanCredentialVerificationCheck";
    }

    @GetMapping(value = {"/", "/LMGetITCertificate"})
    public String LMGetITCertificate() {
        return "website/LMGetITCertificate";
    }

    @GetMapping(value = {"/", "/LMOverdueOutstanding"})
    public String LMOverdueOutstanding() {
        return "website/LMOverdueOutstanding";
    }

    @GetMapping(value = {"/", "/LMSRSearch"})
    public String LMSRSearch() {
        return "website/LMSRSearch";
    }

    @GetMapping(value = {"/", "/LMLoanSummary"})
    public String LMLoanSummary() {
        return "website/LMLoanSummary";
    }

    @GetMapping(value = {"/", "/MLCKYC"})
    public String MLCKYC() {
        return "website/MLCKYC";
    }

    @GetMapping(value = {"/", "/CKYCgetAccounts"})
    public String CKYCgetAccounts() {
        return "website/CKYCgetAccounts";
    }

    @GetMapping(value = {"/", "/CKYCgetDemography"})
    public String CKYCgetDemography() {
        return "website/CKYCgetDemography";
    }

    @GetMapping(value = {"/", "/CKYCgetUSERDATA"})
    public String CKYCgetUSERDATA() {
        return "website/CKYCgetUSERDATA";
    }

    @GetMapping(value = {"/", "/CKYCgetRLOSMORTGAGEDATA"})
    public String CKYCgetRLOSMORTGAGEDATA() {
        return "website/CKYCgetRLOSMORTGAGEDATA";
    }

    @GetMapping(value = {"/", "/CKYCckycDataForAsset"})
    public String CKYCckycDataForAsset() {
        return "website/CKYCckycDataForAsset";
    }

    @GetMapping(value = {"/", "/CKYCgetUserDATABUYICICI"})
    public String CKYCgetUserDATABUYICICI() {
        return "website/CKYCgetUserDATABUYICICI";
    }

    @GetMapping(value = {"/", "/MLVAHAN"})
    public String MLVAHAN() {
        return "website/MLVAHAN";
    }

    @GetMapping(value = {"/", "/MLCreateUpdatePropertyAPIInformation"})
    public String MLCreateUpdatePropertyAPIInformation() {
        return "website/MLCreateUpdatePropertyAPIInformation";
    }

    @GetMapping(value = {"/", "/MLGetClosestPropertyListAPI"})
    public String MLGetClosestPropertyListAPI() {
        return "website/MLGetClosestPropertyListAPI";
    }

    @GetMapping(value = {"/", "/MLGetGeocodingAPI"})
    public String MLGetGeocodingAPI() {
        return "website/MLGetGeocodingAPI";
    }

    @GetMapping(value = {"/", "/MLInsurancePremium"})
    public String MLInsurancePremium() {
        return "website/MLInsurancePremium";
    }

    @GetMapping(value = {"/", "/MLE_Forex"})
    public String MLE_Forex() {
        return "website/MLE_Forex";
    }

    @GetMapping(value = {"/", "/MLRetailerDetails"})
    public String MLRetailerDetails() {
        return "website/MLRetailerDetails";
    }

    @GetMapping(value = {"/", "/MLSingleRetail"})
    public String MLSingleRetail() {
        return "website/MLSingleRetail";
    }

    @GetMapping(value = {"/", "/MLMultipleRetail"})
    public String MLMultipleRetail() {
        return "website/MLMultipleRetail";
    }

    @GetMapping(value = {"/", "/MLSingleCorporate"})
    public String MLSingleCorporate() {
        return "website/MLSingleCorporate";
    }

    @GetMapping(value = {"/", "/MLMultipleCorporate"})
    public String MLMultipleCorporate() {
        return "website/MLMultipleCorporate";
    }

    @GetMapping(value = {"/", "/MLCRM"})
    public String MLCRM() {
        return "website/MLCRM";
    }

    @GetMapping(value = {"/", "/MLLogin"})
    public String MLLogin() {
        return "website/MLLogin";
    }

    @GetMapping(value = {"/", "/MLQuery"})
    public String MLQuery() {
        return "website/MLQuery";
    }

    @GetMapping(value = {"/", "/MLSave"})
    public String MLSave() {
        return "website/MLSave";
    }

    @GetMapping(value = {"/", "/MLFraudVerification"})
    public String MLFraudVerification() {
        return "website/MLFraudVerification";
    }

    @GetMapping(value = {"/", "/MLCMMAPF"})
    public String MLCMMAPF() {
        return "website/MLCMMAPF";
    }

    @GetMapping(value = {"/", "/MLCMMUploadService"})
    public String MLCMMUploadService() {
        return "website/MLCMMUploadService";
    }

    @GetMapping(value = {"/", "/MLCMMStatusUpdate"})
    public String MLCMMStatusUpdate() {
        return "website/MLCMMStatusUpdate";
    }

    @GetMapping(value = {"/", "/MLCMMAPFUpdate"})
    public String MLCMMAPFUpdate() {
        return "website/MLCMMAPFUpdate";
    }

    @GetMapping(value = {"/", "/MLCMMCaseCreationNonAPF"})
    public String MLCMMCaseCreationNonAPF() {
        return "website/MLCMMCaseCreationNonAPF";
    }

    @GetMapping(value = {"/", "/MLCMMCaseCreationAPF"})
    public String MLCMMCaseCreationAPF() {
        return "website/MLCMMCaseCreationAPF";
    }

    @GetMapping(value = {"/", "/MLSASVIYA"})
    public String MLSASVIYA() {
        return "website/MLSASVIYA";
    }

    @GetMapping(value = {"/", "/MLNationalPortalEducationLoanPDP"})
    public String MLNationalPortalEducationLoanPDP() {
        return "website/MLNationalPortalEducationLoanPDP";
    }

    @GetMapping(value = {"/", "/MLESignDocuments"})
    public String MLESignDocuments() {
        return "website/MLESignDocuments";
    }

    @GetMapping(value = {"/", "/MLESignRequestAPI"})
    public String MLESignRequestAPI() {
        return "website/MLESignRequestAPI";
    }

    @GetMapping(value = {"/", "/MLGETSIGNATURESTATUSAPI"})
    public String MLGETSIGNATURESTATUSAPI() {
        return "website/MLGETSIGNATURESTATUSAPI";
    }

    @GetMapping(value = {"/", "/LCOTPCreation"})
    public String LCOTPCreation() {
        return "website/LCOTPCreation";
    }

    @GetMapping(value = {"/", "/LCBlockOnlineTransactions"})
    public String LCBlockOnlineTransactions() {
        return "website/LCBlockOnlineTransactions";
    }

    @GetMapping(value = {"/", "/LCUnblockOnlineTransactions"})
    public String LCUnblockOnlineTransactions() {
        return "website/LCUnblockOnlineTransactions";
    }

    @GetMapping(value = {"/", "/LCBlockATMWithdrawals"})
    public String LCBlockATMWithdrawals() {
        return "website/LCBlockATMWithdrawals";
    }

    @GetMapping(value = {"/", "/LCUnblockATMWithdrawals"})
    public String LCUnblockATMWithdrawals() {
        return "website/LCUnblockATMWithdrawals";
    }

    @GetMapping(value = {"/", "/LCBlockInternationalTransactions"})
    public String LCBlockInternationalTransactions() {
        return "website/LCBlockInternationalTransactions";
    }

    @GetMapping(value = {"/", "/LCUnblockInternationalTransactions"})
    public String LCUnblockInternationalTransactions() {
        return "website/LCUnblockInternationalTransactions";
    }

    @GetMapping(value = {"/", "/LCPrimeCreditCard"})
    public String LCPrimeCreditCard() {
        return "website/LCPrimeCreditCard";
    }

    @GetMapping(value = {"/", "/LCConvertTransactionToEMI"})
    public String LCConvertTransactionToEMI() {
        return "website/LCConvertTransactionToEMI";
    }

    @GetMapping(value = {"/", "/LCCCAplicationStatus"})
    public String LCCCAplicationStatus() {
        return "website/LCCCAplicationStatus";
    }

    @GetMapping(value = {"/", "/LCCreateCCBillPayment"})
    public String LCCreateCCBillPayment() {
        return "website/LCCreateCCBillPayment";
    }

    @GetMapping(value = {"/", "/LCCreditCardsGetOffer"})
    public String LCCreditCardsGetOffer() {
        return "website/LCCreditCardsGetOffer";
    }

    @GetMapping(value = {"/", "/LCFetchCCBillPayment"})
    public String LCFetchCCBillPayment() {
        return "website/LCFetchCCBillPayment";
    }

    @GetMapping(value = {"/", "/LCCardCreation"})
    public String LCCardCreation() {
        return "website/LCCardCreation";
    }

    @GetMapping(value = {"/", "/LCCardStatus"})
    public String LCCardStatus() {
        return "website/LCCardStatus";
    }

    @GetMapping(value = {"/", "/LCViewStatement"})
    public String LCViewStatement() {
        return "website/LCViewStatement";
    }

    @GetMapping(value = {"/", "/LCAvailableCreditLimit"})
    public String LCAvailableCreditLimit() {
        return "website/LCAvailableCreditLimit";
    }

    @GetMapping(value = {"/", "/LCViewRewardPoints"})
    public String LCViewRewardPoints() {
        return "website/LCViewRewardPoints";
    }

    @GetMapping(value = {"/", "/LCUnblockCard"})
    public String LCUnblockCard() {
        return "website/LCUnblockCard";
    }

    @GetMapping(value = {"/", "/LCApplicationProcessing"})
    public String LCApplicationProcessing() {
        return "website/LCApplicationProcessing";
    }

    @GetMapping(value = {"/", "/LCCardInformationEnquiry"})
    public String LCCardInformationEnquiry() {
        return "website/LCCardInformationEnquiry";
    }

    @GetMapping(value = {"/", "/LCMonthlyStatement"})
    public String LCMonthlyStatement() {
        return "website/LCMonthlyStatement";
    }

    @GetMapping(value = {"/", "/LCCardBlockUnblock"})
    public String LCCardBlockUnblock() {
        return "website/LCCardBlockUnblock";
    }

    @GetMapping(value = {"/", "/LCTransactionEnquiry"})
    public String LCTransactionEnquiry() {
        return "website/LCTransactionEnquiry";
    }

    @GetMapping(value = {"/", "/LCGetCardMobileNumber"})
    public String LCGetCardMobileNumber() {
        return "website/LCGetCardMobileNumber";
    }

    @GetMapping(value = {"/", "/LCUpdateBuyerInformation"})
    public String LCUpdateBuyerInformation() {
        return "website/LCUpdateBuyerInformation";
    }

    @GetMapping(value = {"/", "/LCUpgradeCardVirtualtoPhysical"})
    public String LCUpgradeCardVirtualtoPhysical() {
        return "website/LCUpgradeCardVirtualtoPhysical";
    }

    @GetMapping(value = {"/", "/LCAccountStatement"})
    public String LCAccountStatement() {
        return "website/LCAccountStatement";
    }

    @GetMapping(value = {"/", "/LCCardClose"})
    public String LCCardClose() {
        return "website/LCCardClose";
    }

    @GetMapping(value = {"/", "/LCCreditFreezetoActive"})
    public String LCCreditFreezetoActive() {
        return "website/LCCreditFreezetoActive";
    }

    @GetMapping(value = {"/", "/LCCardActivation"})
    public String LCCardActivation() {
        return "website/LCCardActivation";
    }

    @GetMapping(value = {"/", "/LCPassivetoActive"})
    public String LCPassivetoActive() {
        return "website/LCPassivetoActive";
    }

    @GetMapping(value = {"/", "/LCUpdateChangePIN"})
    public String LCUpdateChangePIN() {
        return "website/LCUpdateChangePIN";
    }

    @GetMapping(value = {"/", "/LCPeriodicStatement"})
    public String LCPeriodicStatement() {
        return "website/LCPeriodicStatement";
    }

    @GetMapping(value = {"/", "/LCMiniStatement"})
    public String LCMiniStatement() {
        return "website/LCMiniStatement";
    }

    @GetMapping(value = {"/", "/LCCardtoCardTransfer"})
    public String LCCardtoCardTransfer() {
        return "website/LCCardtoCardTransfer";
    }

    @GetMapping(value = {"/", "/LCLinkedMobile"})
    public String LCLinkedMobile() {
        return "website/LCLinkedMobile";
    }

    @GetMapping(value = {"/", "/LCCardSale"})
    public String LCCardSale() {
        return "website/LCCardSale";
    }

    @GetMapping(value = {"/", "/LCCVVGeneration"})
    public String LCCVVGeneration() {
        return "website/LCCVVGeneration";
    }

    @GetMapping(value = {"/", "/LCBuyerNumberLinked"})
    public String LCBuyerNumberLinked() {
        return "website/LCBuyerNumberLinked";
    }

    @GetMapping(value = {"/", "/LCLast10TransactionDetails"})
    public String LCLast10TransactionDetails() {
        return "website/LCLast10TransactionDetails";
    }

    @GetMapping(value = {"/", "/LCCardTopupCardToCard"})
    public String LCCardTopupCardToCard() {
        return "website/LCCardTopupCardToCard";
    }

    @GetMapping(value = {"/", "/LCCardInstantDebit"})
    public String LCCardInstantDebit() {
        return "website/LCCardInstantDebit";
    }

    @GetMapping(value = {"/", "/LCLimitVerification"})
    public String LCLimitVerification() {
        return "website/LCLimitVerification";
    }

    @GetMapping(value = {"/", "/LCFetchContactInfo"})
    public String LCFetchContactInfo() {
        return "website/LCFetchContactInfo";
    }

    @GetMapping(value = {"/", "/LCFetchPersonalInfo"})
    public String LCFetchPersonalInfo() {
        return "website/LCFetchPersonalInfo";
    }

    @GetMapping(value = {"/", "/LCPocketsWalletCreationAPI"})
    public String LCPocketsWalletCreationAPI() {
        return "website/LCPocketsWalletCreationAPI";
    }

    @GetMapping(value = {"/", "/LCPocketsAddFundsAPI"})
    public String LCPocketsAddFundsAPI() {
        return "website/LCPocketsAddFundsAPI";
    }

    @GetMapping(value = {"/", "/LCPocketsCardDebitAPI"})
    public String LCPocketsCardDebitAPI() {
        return "website/LCPocketsCardDebitAPI";
    }

    @GetMapping(value = {"/", "/LCPocketsTransactionEnquiryAPI"})
    public String LCPocketsTransactionEnquiryAPI() {
        return "website/LCPocketsTransactionEnquiryAPI";
    }

    @GetMapping(value = {"/", "/LCPocketsMiniStatementAPI"})
    public String LCPocketsMiniStatementAPI() {
        return "website/LCPocketsMiniStatementAPI";
    }

    @GetMapping(value = {"/", "/LCPocketsDetailedStatementAPI"})
    public String LCPocketsDetailedStatementAPI() {
        return "website/LCPocketsDetailedStatementAPI";
    }

    @GetMapping(value = {"/", "/LCDebitCardStatus"})
    public String LCDebitCardStatus() {
        return "website/LCDebitCardStatus";
    }

    @GetMapping(value = {"/", "/LCDebitCardGridAuth"})
    public String LCDebitCardGridAuth() {
        return "website/LCDebitCardGridAuth";
    }

    @GetMapping(value = {"/", "/LCAccountCreation"})
    public String LCAccountCreation() {
        return "website/LCAccountCreation";
    }

    @GetMapping(value = {"/", "/LCAccountManagement"})
    public String LCAccountManagement() {
        return "website/LCAccountManagement";
    }

    @GetMapping(value = {"/", "/LCApplicationStatusCheck"})
    public String LCApplicationStatusCheck() {
        return "website/LCApplicationStatusCheck";
    }

    @GetMapping(value = {"/", "/LCPaylaterBalanceInquiry"})
    public String LCPaylaterBalanceInquiry() {
        return "website/LCPaylaterBalanceInquiry";
    }

    @GetMapping(value = {"/", "/LCPaylaterBillEnquiry"})
    public String LCPaylaterBillEnquiry() {
        return "website/LCPaylaterBillEnquiry";
    }

    @GetMapping(value = {"/", "/LCPaylaterStatement"})
    public String LCPaylaterStatement() {
        return "website/LCPaylaterStatement";
    }

    @GetMapping(value = {"/", "/LCPaylaterPayDues"})
    public String LCPaylaterPayDues() {
        return "website/LCPaylaterPayDues";
    }

    @GetMapping(value = {"/", "/LCPaylaterODAcDiscovery"})
    public String LCPaylaterODAcDiscovery() {
        return "website/LCPaylaterODAcDiscovery";
    }

    @GetMapping(value = {"/", "/LCPaylaterWithEMI"})
    public String LCPaylaterWithEMI() {
        return "website/LCPaylaterWithEMI";
    }

    @GetMapping(value = {"/", "/LCAccountClosure"})
    public String LCAccountClosure() {
        return "website/LCAccountClosure";
    }

    @GetMapping(value = {"/", "/LCGetSavingAccountDetails"})
    public String LCGetSavingAccountDetails() {
        return "website/LCGetSavingAccountDetails";
    }

    @GetMapping(value = {"/", "/LCForeclosureAmount"})
    public String LCForeclosureAmount() {
        return "website/LCForeclosureAmount";
    }

    @GetMapping(value = {"/", "/LCRePaymentOfLoan"})
    public String LCRePaymentOfLoan() {
        return "website/LCRePaymentOfLoan";
    }

    @GetMapping(value = {"/", "/LCPaylaterEmiBillInquiry"})
    public String LCPaylaterEmiBillInquiry() {
        return "website/LCPaylaterEmiBillInquiry";
    }

    @GetMapping(value = {"/", "/LCPaylaterEmiAmortizationSchedule"})
    public String LCPaylaterEmiAmortizationSchedule() {
        return "website/LCPaylaterEmiAmortizationSchedule";
    }

    @GetMapping(value = {"/", "/LCPaylaterEmiLoanDisbursement"})
    public String LCPaylaterEmiLoanDisbursement() {
        return "website/LCPaylaterEmiLoanDisbursement";
    }

    @GetMapping(value = {"/", "/LCPaylaterEmiLoanLoanCreation"})
    public String LCPaylaterEmiLoanLoanCreation() {
        return "website/LCPaylaterEmiLoanLoanCreation";
    }

    @GetMapping(value = {"/", "/LCLoanCreationForExistingAccountHolderAndAutoDebit"})
    public String LCLoanCreationForExistingAccountHolderAndAutoDebit() {
        return "website/LCLoanCreationForExistingAccountHolderAndAutoDebit";
    }

    @GetMapping(value = {"/", "/LCCardlessEMI"})
    public String LCCardlessEMI() {
        return "website/LCCardlessEMI";
    }

    @GetMapping(value = {"/", "/LCCardlessEMIEligibility"})
    public String LCCardlessEMIEligibility() {
        return "website/LCCardlessEMIEligibility";
    }

    @GetMapping(value = {"/", "/LCCardlessEMIValidation"})
    public String LCCardlessEMIValidation() {
        return "website/LCCardlessEMIValidation";
    }

    @GetMapping(value = {"/", "/LCCardlessEMIConfirmation"})
    public String LCCardlessEMIConfirmation() {
        return "website/LCCardlessEMIConfirmation";
    }

    @GetMapping(value = {"/", "/LCCardlessEMICancellation"})
    public String LCCardlessEMICancellation() {
        return "website/LCCardlessEMICancellation";
    }

    @GetMapping(value = {"/", "/LCCardlessEMIResendOTP"})
    public String LCCardlessEMIResendOTP() {
        return "website/LCCardlessEMIResendOTP";
    }

    @GetMapping(value = {"/", "/BBGetPreApprovedOffers"})
    public String BBGetPreApprovedOffers() {
        return "website/BBGetPreApprovedOffers";
    }

    @GetMapping(value = {"/", "/BBGetOfferOnCustomerID"})
    public String BBGetOfferOnCustomerID() {
        return "website/BBGetOfferOnCustomerID";
    }

    @GetMapping(value = {"/", "/BBGetOfferOnMobile"})
    public String BBGetOfferOnMobile() {
        return "website/BBGetOfferOnMobile";
    }

    @GetMapping(value = {"/", "/BBPreApprovedOffer"})
    public String BBPreApprovedOffer() {
        return "website/BBPreApprovedOffer";
    }

    @GetMapping(value = {"/", "/BBBlockPreApprovedOffer"})
    public String BBBlockPreApprovedOffer() {
        return "website/BBBlockPreApprovedOffer";
    }

    @GetMapping(value = {"/", "/BBUpdatePassportDetails"})
    public String BBUpdatePassportDetails() {
        return "website/BBUpdatePassportDetails";
    }

    @GetMapping(value = {"/", "/BBVideoKYCStatus"})
    public String BBVideoKYCStatus() {
        return "website/BBVideoKYCStatus";
    }

    @GetMapping(value = {"/", "/BBGetCVidyaStatus"})
    public String BBGetCVidyaStatus() {
        return "website/BBGetCVidyaStatus";
    }

    @GetMapping(value = {"/", "/BBOTPGeneration"})
    public String BBOTPGeneration() {
        return "website/BBOTPGeneration";
    }

    @GetMapping(value = {"/", "/BBTransUnion"})
    public String BBTransUnion() {
        return "website/BBTransUnion";
    }

    @GetMapping(value = {"/", "/BBCustomerAMLCheck"})
    public String BBCustomerAMLCheck() {
        return "website/BBCustomerAMLCheck";
    }

    @GetMapping(value = {"/", "/BBCustomerAMLCheckCallBack"})
    public String BBCustomerAMLCheckCallBack() {
        return "website/BBCustomerAMLCheckCallBack";
    }

    @GetMapping(value = {"/", "/BBDIYCIBIL"})
    public String BBDIYCIBIL() {
        return "website/BBDIYCIBIL";
    }

    @GetMapping(value = {"/", "/BBFetchPANDetails"})
    public String BBFetchPANDetails() {
        return "website/BBFetchPANDetails";
    }

    @GetMapping(value = {"/", "/BBOTPVerification"})
    public String BBOTPVerification() {
        return "website/BBOTPVerification";
    }

    @GetMapping(value = {"/", "/BBAadharOTPGeneration"})
    public String BBAadharOTPGeneration() {
        return "website/BBAadharOTPGeneration";
    }

    @GetMapping(value = {"/", "/BBAadharOTPVerification"})
    public String BBAadharOTPVerification() {
        return "website/BBAadharOTPVerification";
    }

    @GetMapping(value = {"/", "/BBCustomerHandshake"})
    public String BBCustomerHandshake() {
        return "website/BBCustomerHandshake";
    }

    @GetMapping(value = {"/", "/BBWaitCallTime"})
    public String BBWaitCallTime() {
        return "website/BBWaitCallTime";
    }

    @GetMapping(value = {"/", "/BBGetDetailsByTrackingID"})
    public String BBGetDetailsByTrackingID() {
        return "website/BBGetDetailsByTrackingID";
    }

    @GetMapping(value = {"/", "/BBConsentInitiation"})
    public String BBConsentInitiation() {
        return "website/BBConsentInitiation";
    }

    @GetMapping(value = {"/", "/BBTransactionStatus"})
    public String BBTransactionStatus() {
        return "website/BBTransactionStatus";
    }

    @GetMapping(value = {"/", "/BBDownloadAnalysedReport"})
    public String BBDownloadAnalysedReport() {
        return "website/BBDownloadAnalysedReport";
    }

    @GetMapping(value = {"/", "/BBeKYC"})
    public String BBeKYC() {
        return "website/BBeKYC";
    }

    @GetMapping(value = {"/", "/BBeKYCforHR"})
    public String BBeKYCforHR() {
        return "website/BBeKYCforHR";
    }

    @GetMapping(value = {"/", "/BBPerfiosWidgetLink"})
    public String BBPerfiosWidgetLink() {
        return "website/BBPerfiosWidgetLink";
    }

    @GetMapping(value = {"/", "/BBPerfiosTransactionStatus"})
    public String BBPerfiosTransactionStatus() {
        return "website/BBPerfiosTransactionStatus";
    }

    @GetMapping(value = {"/", "/BBPerfiosReport"})
    public String BBPerfiosReport() {
        return "website/BBPerfiosReport";
    }

    @GetMapping(value = {"/", "/BBPerfiosIndividualReport"})
    public String BBPerfiosIndividualReport() {
        return "website/BBPerfiosIndividualReport";
    }

    @GetMapping(value = {"/", "/BBPerfiosDeleteData"})
    public String BBPerfiosDeleteData() {
        return "website/BBPerfiosDeleteData";
    }

    @GetMapping(value = {"/", "/BBPerfiosDeleteTransaction"})
    public String BBPerfiosDeleteTransaction() {
        return "website/BBPerfiosDeleteTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfiosRequestReviewOfAPerfiosTransaction"})
    public String BBPerfiosRequestReviewOfAPerfiosTransaction() {
        return "website/BBPerfiosRequestReviewOfAPerfiosTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfiosListOfSupportedInstitutions"})
    public String BBPerfiosListOfSupportedInstitutions() {
        return "website/BBPerfiosListOfSupportedInstitutions";
    }

    @GetMapping(value = {"/", "/BBPerfiosAddFinancialYear"})
    public String BBPerfiosAddFinancialYear() {
        return "website/BBPerfiosAddFinancialYear";
    }

    @GetMapping(value = {"/", "/BBPerfiosUploadStatement"})
    public String BBPerfiosUploadStatement() {
        return "website/BBPerfiosUploadStatement";
    }

    @GetMapping(value = {"/", "/BBPerfiosCompleteTransaction"})
    public String BBPerfiosCompleteTransaction() {
        return "website/BBPerfiosCompleteTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfiosRetrieveReportsAndStatements"})
    public String BBPerfiosRetrieveReportsAndStatements() {
        return "website/BBPerfiosRetrieveReportsAndStatements";
    }

    @GetMapping(value = {"/", "/BBPerfiosInitiateTransaction"})
    public String BBPerfiosInitiateTransaction() {
        return "website/BBPerfiosInitiateTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfiosUploadFile"})
    public String BBPerfiosUploadFile() {
        return "website/BBPerfiosUploadFile";
    }

    @GetMapping(value = {"/", "/BBPerfiosProcessStatement"})
    public String BBPerfiosProcessStatement() {
        return "website/BBPerfiosProcessStatement";
    }

    @GetMapping(value = {"/", "/BBPerfiosReProcessStatement"})
    public String BBPerfiosReProcessStatement() {
        return "website/BBPerfiosReProcessStatement";
    }

    @GetMapping(value = {"/", "/BBPerfiosReportGeneration"})
    public String BBPerfiosReportGeneration() {
        return "website/BBPerfiosReportGeneration";
    }

    @GetMapping(value = {"/", "/BBPerfiosRetrieveReport"})
    public String BBPerfiosRetrieveReport() {
        return "website/BBPerfiosRetrieveReport";
    }

    @GetMapping(value = {"/", "/BBPerfiosListInstitutions"})
    public String BBPerfiosListInstitutions() {
        return "website/BBPerfiosListInstitutions";
    }

    @GetMapping(value = {"/", "/BBPerfiosCancelTransaction"})
    public String BBPerfiosCancelTransaction() {
        return "website/BBPerfiosCancelTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfios3DeleteTransaction"})
    public String BBPerfios3DeleteTransaction() {
        return "website/BBPerfios3DeleteTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfiosgstStatementUploadStartTransaction"})
    public String BBPerfiosgstStatementUploadStartTransaction() {
        return "website/BBPerfiosgstStatementUploadStartTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfiosgstStatementUploaduploadGST"})
    public String BBPerfiosgstStatementUploaduploadGST() {
        return "website/BBPerfiosgstStatementUploaduploadGST";
    }

    @GetMapping(value = {"/", "/BBPerfiosgstStatementUploadProcessStatement"})
    public String BBPerfiosgstStatementUploadProcessStatement() {
        return "website/BBPerfiosgstStatementUploadProcessStatement";
    }

    @GetMapping(value = {"/", "/BBPerfiosgstStatementUploadTransactionStatus"})
    public String BBPerfiosgstStatementUploadTransactionStatus() {
        return "website/BBPerfiosgstStatementUploadTransactionStatus";
    }

    @GetMapping(value = {"/", "/BBPerfiosgstStatementUploadRetrieveReport"})
    public String BBPerfiosgstStatementUploadRetrieveReport() {
        return "website/BBPerfiosgstStatementUploadRetrieveReport";
    }

    @GetMapping(value = {"/", "/BBPerfiosgstStatementUploadRetrieveReportWithUploadedStatements"})
    public String BBPerfiosgstStatementUploadRetrieveReportWithUploadedStatements() {
        return "website/BBPerfiosgstStatementUploadRetrieveReportWithUploadedStatements";
    }

    @GetMapping(value = {"/", "/BBPerfiosPerfiosAnalyseReportITStatementUploadStartTransaction"})
    public String BBPerfiosPerfiosAnalyseReportITStatementUploadStartTransaction() {
        return "website/BBPerfiosPerfiosAnalyseReportITStatementUploadStartTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfiosPerfiosAnalyseReportITStatementUploadUploadStatement"})
    public String BBPerfiosPerfiosAnalyseReportITStatementUploadUploadStatement() {
        return "website/BBPerfiosPerfiosAnalyseReportITStatementUploadUploadStatement";
    }

    @GetMapping(value = {"/", "/BBPerfiosPerfiosAnalyseReportITStatementUploadProcessStatement"})
    public String BBPerfiosPerfiosAnalyseReportITStatementUploadProcessStatement() {
        return "website/BBPerfiosPerfiosAnalyseReportITStatementUploadProcessStatement";
    }

    @GetMapping(value = {"/", "/BBPerfiosPerfiosAnalyseReportITStatementUploadCompleteTransaction"})
    public String BBPerfiosPerfiosAnalyseReportITStatementUploadCompleteTransaction() {
        return "website/BBPerfiosPerfiosAnalyseReportITStatementUploadCompleteTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfiosPerfiosAnalyseReportITStatementUploadWidgetLink"})
    public String BBPerfiosPerfiosAnalyseReportITStatementUploadWidgetLink() {
        return "website/BBPerfiosPerfiosAnalyseReportITStatementUploadWidgetLink";
    }

    @GetMapping(value = {"/", "/BBPerfiosPerfiosAnalyseReportITStatementUploadTransactionStatus"})
    public String BBPerfiosPerfiosAnalyseReportITStatementUploadTransactionStatus() {
        return "website/BBPerfiosPerfiosAnalyseReportITStatementUploadTransactionStatus";
    }

    @GetMapping(value = {"/", "/BBPerfiosPerfiosAnalyseReportITStatementUploadReport"})
    public String BBPerfiosPerfiosAnalyseReportITStatementUploadReport() {
        return "website/BBPerfiosPerfiosAnalyseReportITStatementUploadReport";
    }

    @GetMapping(value = {"/", "/BBPerfiosPerfiosAnalyseReportITStatementIndividualReport"})
    public String BBPerfiosPerfiosAnalyseReportITStatementIndividualReport() {
        return "website/BBPerfiosPerfiosAnalyseReportITStatementIndividualReport";
    }

    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportPerfiosGSTv2StartTransaction"})
    public String BBPerfiosAnalyseReportPerfiosGSTv2StartTransaction() {
        return "website/BBPerfiosAnalyseReportPerfiosGSTv2StartTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportPerfiosGSTv2WidgetLink"})
    public String BBPerfiosAnalyseReportPerfiosGSTv2WidgetLink() {
        return "website/BBPerfiosAnalyseReportPerfiosGSTv2WidgetLink";
    }

    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportPerfiosGSTv2TransactionStatus"})
    public String BBPerfiosAnalyseReportPerfiosGSTv2TransactionStatus() {
        return "website/BBPerfiosAnalyseReportPerfiosGSTv2TransactionStatus";
    }

    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportPerfiosGSTv2ReportIndividual"})
    public String BBPerfiosAnalyseReportPerfiosGSTv2ReportIndividual() {
        return "website/BBPerfiosAnalyseReportPerfiosGSTv2ReportIndividual";
    }

    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportPerfiosGenerateLinkITOnline"})
    public String BBPerfiosAnalyseReportPerfiosGenerateLinkITOnline() {
        return "website/BBPerfiosAnalyseReportPerfiosGenerateLinkITOnline";
    }

    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportPerfiosGenerateLinkITStatement"})
    public String BBPerfiosAnalyseReportPerfiosGenerateLinkITStatement() {
        return "website/BBPerfiosAnalyseReportPerfiosGenerateLinkITStatement";
    }

    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportPerfiosGenerateLinkGST"})
    public String BBPerfiosAnalyseReportPerfiosGenerateLinkGST() {
        return "website/BBPerfiosAnalyseReportPerfiosGenerateLinkGST";
    }


    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportSalarySlipUploadv3InitiateTransaction"})
    public String BBPerfiosAnalyseReportSalarySlipUploadv3InitiateTransaction() {
        return "website/BBPerfiosAnalyseReportSalarySlipUploadv3InitiateTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportSalarySlipUploadv3CancelTransaction"})
    public String BBPerfiosAnalyseReportSalarySlipUploadv3CancelTransaction() {
        return "website/BBPerfiosAnalyseReportSalarySlipUploadv3CancelTransaction";
    }

    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportSalarySlipUploadv3UploadFiles"})
    public String BBPerfiosAnalyseReportSalarySlipUploadv3UploadFiles() {
        return "website/BBPerfiosAnalyseReportSalarySlipUploadv3UploadFiles";
    }

    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportSalarySlipUploadv3ProcessSalarySlip"})
    public String BBPerfiosAnalyseReportSalarySlipUploadv3ProcessSalarySlip() {
        return "website/BBPerfiosAnalyseReportSalarySlipUploadv3ProcessSalarySlip";
    }

    @GetMapping(value = {"/", "/BBPerfiosAnalyseReportSalarySlipUploadv3ReportGeneration"})
    public String BBPerfiosAnalyseReportSalarySlipUploadv3ReportGeneration() {
        return "website/BBPerfiosAnalyseReportSalarySlipUploadv3ReportGeneration";
    }

    @GetMapping(value = {"/", "/SwaggerMainPage"})
    public String SwaggerMainPage() {
        return "website/SwaggerMainPage";
    }

    @GetMapping(value = {"/", "/apicart"})
    public String apiCartPage() {
        return "website/api-cart";
    }

    @GetMapping(value = {"/", "/mainPage"})
    public String mainPage() {
        return "website/index";
    }

    @GetMapping(value = {"/api-cart-billing"})
    public String apiCartBillingPage() {
        return "website/api-cart-billing";
    }

}