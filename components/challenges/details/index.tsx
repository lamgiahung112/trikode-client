import ContentSplitter from "./content-splitter"
import TrikodeEditor from "./editor"
import MainContentSection from "./main"

function ChallengeDetailsContent() {
	return (
		<ContentSplitter>
			<MainContentSection />
			<TrikodeEditor />
		</ContentSplitter>
	)
}

export default ChallengeDetailsContent
