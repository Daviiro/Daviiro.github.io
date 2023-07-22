import React from "react";
import { Container, SectionTitle, Content } from "./styles";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";

const PrivacyPolicy: React.FC = () => {
	const { t, i18n } = useTranslation();
	return (
		<Container>
			<Header />
			<Content>
				<SectionTitle>{t("privpol")}</SectionTitle>
				<br />
				<span>{t("privpolUserInfo")}</span>
				<br />
				<br />
				<span>{t("privpolAutoInfo")}</span>
				<br />
				<br />
				<span>{t("privpolLocalInfo")}</span>
				<br />
				<br />
				<span>{t("privpolPubli")}</span>
				<br />
				<br />
				<span>{t("privpolConsen")}</span>
				<br />
				<br />
				<span>{t("privpolContact")}</span>
			</Content>
		</Container>
	);
};

export default PrivacyPolicy;
