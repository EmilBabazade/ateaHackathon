

export interface StepPageProps {
    onNext?: () => void,
    onPrevious?: () => void,
    previousDisabled?: boolean,
    nextButtonText?: string,
}