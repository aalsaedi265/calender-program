class Stuff < ApplicationRecord

    belongs_to :user

    validates :goal, presence: true
end
