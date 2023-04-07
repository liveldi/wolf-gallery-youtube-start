import { Photo } from './types';

import { Navigation } from './Navigation';
import { PreviewGallery } from './PreviewGallery';
import { TransitionPhoto } from './TransitionPhoto';

interface WolfGalleryProps {
    photos: any[];
}

export const WolfGallery: React.FC<WolfGalleryProps> = ({}) => {
    return (
        <div>
            <TransitionPhoto />
            <Navigation />
            <PreviewGallery />
        </div>
    );
}