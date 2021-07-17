import React, { useState, useRef, useEffect } from 'react';
import MyProfileUpdate from './myprofile-update/MyprofileUpdate';
import MyProfileView from './Myprofile-view/MyprofileView';
import './Myprofile.scss';
import UpdatePassword from './update-password/UpdatePassword';
import * as api from '../../../Global/apiHelper/Apihelper';

const images_path = process.env.PUBLIC_URL + '/assets/images/';
const script_path = process.env.PUBLIC_URL + '/assets/js/';

const Myprofile = () => {
	const [pageType, setPageType] = useState('view');
	const [pageTitle, setPageTitle] = useState('Update Profile');
	const [profile, setProfile] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [loader, setLoader] = useState(false);
	useEffect(() => {
		getProfile();
	}, []);
	async function getProfile() {
		setLoader(true);
		try {
			let response = await api.getAll('users/profile', true);
			setLoader(false);
			if (response.data && response.data[0]) {
				setProfile({
					...response.data[0],
					presentAddress: response.data[0].present_address_obj,
					permanentAddress: response.data[0].parmanent_address_obj,
				});
			} else {
				setProfile({});
			}
		} catch (e) {}
	}
	const onButtonClickHandler = (e, currentPageType) => {
		if (currentPageType === 'changePassword' || currentPageType === 'update') {
			setPageTitle('Update Profile');
		} else if (currentPageType === 'view') {
			setPageTitle('');
		}
		setPageType(currentPageType);
	};
	const onChangeProfileImage = (e) => {
		const reader = new FileReader();
		const file = e.target.files[0];
		reader.onloadend = () => {
			setImagePreview({
				file: file,
				previewUrl: reader.result,
			});
		};
		reader.readAsDataURL(file);
	};
	return (
		<div className="row_full">
			<div className="profile-wrapper d-flex flex-column">
				{profile ? (
					<div className="profile-page-header">
						<div className="header-content">
							<div className="profile-image">
								<label
									for="photo-upload"
									className={pageType === 'update' ? 'enable-upload' : ''}
								>
									<div className="img-wrap img-upload">
										{imagePreview && imagePreview.previewUrl ? (
											<img for="photo-upload" src={imagePreview.previewUrl} />
										) : (
											<img for="photo-upload" src={profile.profile_image} />
										)}
									</div>
									{pageType === 'update' ? (
										<input
											id="photo-upload"
											type="file"
											onChange={onChangeProfileImage}
										/>
									) : null}
								</label>
							</div>
							<span className="title ml-3 pb-2">{pageTitle}</span>
						</div>
						<div className="change-password-btn pb-5 d-flex flex-row">
							{pageType === 'update' || pageType === 'changePassword' ? (
								<button
									type="button"
									className="d-flex justify-content-center btn-sm btn-border-info ml-3"
									onClick={(e) => onButtonClickHandler(e, 'view')}
								>
									View Profile
								</button>
							) : null}
							{pageType === 'view' ? (
								<button
									type="button"
									className="d-flex justify-content-center btn-sm btn-border-info ml-3"
									onClick={(e) => onButtonClickHandler(e, 'update')}
								>
									Update Profile
								</button>
							) : null}
							{pageType === 'view' || pageType === 'update' ? (
								<button
									type="button"
									className="d-flex justify-content-center btn-sm btn-border-info ml-3"
									onClick={(e) => onButtonClickHandler(e, 'changePassword')}
								>
									Change Password
								</button>
							) : null}
						</div>
					</div>
				) : null}
				<div className="profile-form">
					{profile && pageType === 'changePassword' ? (
						<UpdatePassword
							profile={profile}
							onButtonClickHandler={onButtonClickHandler}
						></UpdatePassword>
					) : null}
					{profile && pageType === 'update' ? (
						<MyProfileUpdate
							profile={profile}
							imagePreview={imagePreview}
							onButtonClickHandler={onButtonClickHandler}
						></MyProfileUpdate>
					) : null}
					{profile && pageType === 'view' ? (
						<MyProfileView
							profile={profile}
							onButtonClickHandler={onButtonClickHandler}
						></MyProfileView>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Myprofile;
