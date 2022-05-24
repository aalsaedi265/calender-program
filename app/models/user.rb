class User < ApplicationRecord

    has_many :stuffs

    # has_secure_password
    
    validates :name, presence: true
end
